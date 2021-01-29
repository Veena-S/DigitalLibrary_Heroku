// UserValidator controller handles the user validation from the cookies,
// along with login/signup/logout requests .

import generatedHashedValue from '../hashGenerator.mjs';
/**
 * Function that exports the userValidator controller function.
  * @param dbModels - dbModels
 */
export default function userValidator(dbModels) {
/**
 * This function validates the session, by checking the cookie values.
 * If cookies don't match, it will return false, else true.
 * @param loggedInSession - Logged in details from the cookies
 * @param userEmail - email of the user which is used to login
 */
  const validateSessionUserByCookies = (loggedInSession, userEmail) => {
    console.log('validateSessionUserByCookies');
    if (loggedInSession === undefined || userEmail === undefined)
    {
      console.log('validateSessionUserByCookies - undefined values');
      return false;
    }
    // create hashed value for the user email provided.
    const hashedUserInfo = generatedHashedValue(userEmail, true);
    if (hashedUserInfo !== loggedInSession)
    {
    // Already logged in user is different
      console.log('validateSessionUserByCookies - hashed value is not matching: ', `hashedUserInfo: ${hashedUserInfo}`, `loggedInSession: ${loggedInSession}`);
      return false;
    }
    // If hashedUserInfo === loggedInSession, same user is already logged in
    console.log('validateSessionUserByCookies - success');
    return true;
  };

  /**
   * Function that searches for the specified user in the request
   * @param request
   * @param response
   */
  const findUser = async (email, request, response) => {
    try {
      request.userInfo = await dbModels.User.findOne({
        where: { email },
      });
      console.log(`Returned user: ${request.userInfo}`);
    }
    catch (error)
    {
      console.log(error);
      // throw error;
      response.status(300).send({ success: false, message: 'User not found. Please signup', error });
    }
    request.isUserLoggedIn = true;
  };

  /**
   * Function to check whether the request is an authenticated user or not
   *
   * @param request - HTTP request object received
   * @param response - HTTP response object
   * @param next - represents the next function to be called.
   */
  const authenticateRequestUsingCookies = async (request, response, next) => {
    console.log('authenticateRequestUsingCookies');
    // set the default value
    request.isUserLoggedIn = false;

    // Validate the session is logged in or not using cookies
    const { loggedInSession, userInfo } = request.cookies;

    console.log(`request.cookies:  ${loggedInSession}, ${userInfo}`);

    if (loggedInSession === '' && userInfo === '')
    {
      console.log('authenticateRequestUsingCookies - not logged in');
      // throw new Error('Please login or signup');
      response.status(300).send({ success: false, message: 'Please login or signup' });
    }
    if (validateSessionUserByCookies(loggedInSession, userInfo))
    {
    // look for this user in the database
      try {
        await findUser(userInfo, request, response);
        next();
      } catch (error) {
        console.log('authenticateRequestUsingCookies - User not found');
        // throw new Error('User not found');
        response.status(300).send({ success: false, message: 'User not found. Please signup', error });
      }
    }
    else {
      console.log('validateSessionUserByCookies failed');
      next();
    }
    return '';
  };

  return {
    authenticateRequestUsingCookies, validateSessionUserByCookies,
  };
}
