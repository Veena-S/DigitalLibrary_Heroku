import generatedHashedValue from '../hashGenerator.mjs';

// This controller file handles the requests meant for Users table
/**
 * Exported function that handles different requestes related to Users table
 * @param dbModels - Object that holds all the models created to represent the db tables
 */
export default function users(dbModels) {
  /**
   * This function validates the given user name against the data retrieved from the database
   * Also, sends the cookie also along with response
   * @param loginData - email & password specified in the login request
   * @param userData - user data retrieved from the database
   * @param response - to send HTTP response
   */
  const validateAndLoginUser = (loginData, userData, response) => {
    console.log(userData);
    console.log(userData.email);
    // Get the hashed value of the user provided password
    const hashedInputPassword = generatedHashedValue(loginData.password, false);
    // If the user's hashed password in the database does not
    // match the hashed input password, login fails
    if (userData.password !== hashedInputPassword) {
    // the error for incorrect email and incorrect password are the same for security reasons.
    // This is to prevent detection of whether a user has an account for a given service.
      response.status(300).send({ success: false, message: 'Login failed!' });
    }
    // Set the cookies and send the response
    // create an unhashed cookie string based on user ID and salt
    const hashedCookieString = generatedHashedValue(loginData.email, true);
    response.cookie('loggedInSession', hashedCookieString);
    response.cookie('userInfo', loginData.email);
    response.status(200).send({ success: true, message: 'Logged-in successfully!!', userName: userData.name });
  };

  /**
   * Function that handles the login request.
   * If the user is not already registered it will ask for confirmation to create a new user,
   * @param request - http request
   * @param response http response
   */
  const handleLoginRequest = async (request, response) => {
    console.log('handleLoginRequest');
    const { email, password } = request.body;
    const loginData = { email, password };
    console.log(`loginData: ${loginData.email}, ${loginData.password}`);
    try {
      console.log(dbModels.User);
      request.userInfo = await dbModels.User.findOne({
        where: { email },
      });
      if (request.userInfo === null || request.userInfo === undefined)
      {
        response.status(300).send({ success: false, message: 'User not found. Please signup' });
      }
      // Once the user data is retrieved from database,
      // validate it with the given user name and password
      validateAndLoginUser(loginData, request.userInfo, response);
    }
    catch (error)
    {
      console.log(error);
      // throw new Error('User not found. Please Sign-up');
      response.status(300).send({ success: false, message: 'User not found. Please signup', error });
    }
  };

  // Log a user out. Get rid of their cookie.
  const handleLogoutRequest = (request, response) => {
    response.clearCookie('loggedInSession');
    response.clearCookie('userInfo');
    response.send({ success: true, message: 'Logged out successfully!!' });
  };

  /**
   * Function that handles the request to check whether there is any user already logged in
   * @param request
   * @param response
   */
  const handleLoggedInValidation = (request, response) => {
    console.log('handleLoggedInValidation');
    const { message, userName } = (request.isUserLoggedIn) ? { message: 'User already logged in', userName: request.userInfo.name } : { message: 'User not logged in', userName: '' };
    response.send({ success: true, message, userName });
  };

  /**
   *
   * @param request - HTTP request object received through the routes.mjs
   * @param response - HTTP response object received through the routes.mjs
   *                 - To send response back
   *
   * Function that renders the home page
   */
  const handleNewUserRegister = ((request, response) => {
    console.log('handleNewUserRegister');
    const { email, password } = request.body;
    const name = email.substr(0, email.find('@'));
    const hashedPassword = generatedHashedValue(password, false);

    console.log(`Request: ${email}, ${password}, Hashed Password: ${hashedPassword}`);
    dbModels.User.create({ name, email, password: hashedPassword })
      .then((newUser) => {
        const newUserData = newUser.toJSON();
        console.log(newUserData);
        const hashedCookieString = generatedHashedValue(email, true);
        response.cookie('loggedInSession', hashedCookieString);
        response.cookie('userInfo', email);
        response.send({ success: true, message: 'User registered successfully!!', newUserData });
      })
      .catch((err) => {
        console.log(err);
        response.send({ success: false, err }); });
  });

  /**
   * Function to get the details of user specified in the email id
   * @param request - HTTP request
   * @param response - HTTP response
   */
  const getUserByEmail = async (request, response) => {
    console.log('getUserByEmail');
    try {
      try {
        const userData = await dbModels.User.findOne({
          where: { email: request.body.email },
        });
        console.log(`Returned user: ${userData}`);
        response.send(userData);
      }
      catch (error)
      {
        console.log(error);
        response.send({ message: 'User not found', error });
      }
    }
    catch (error)
    {
      console.log(error);
      response.send(error);
    }
  };

  /**
   * Function reads all the data from the Users table and send the JSON converted data as reposnse
   * @param request - http request
   * @param response - http response
   */
  const getAllUsers = (request, response) => {
    console.log('getAllUsers');
    dbModels.User.findAll({
      attributes: ['id', 'name', 'email'],
    })
      .then((returnedUsers) => {
        // console.log(returnedUsers.toJSON());
        // response.send(returnedUsers.toJSON());
        response.json(returnedUsers);
      })
      .catch((err) => {
        console.log(err);
        response.send(err);
      });
  };

  // The users() function wil return the functions defined
  return {
    handleNewUserRegister, getAllUsers, getUserByEmail, handleLoginRequest, handleLogoutRequest, handleLoggedInValidation,
  };
}
