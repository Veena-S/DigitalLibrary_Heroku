import { resolve } from 'path';
import db from './models/index.mjs';

// Importing controllers
import userValidator from './controllers/userValidator.mjs';
import users from './controllers/users.mjs';

export default function routes(app) {
  /**
   * TO DO: Middleware user authentication
   */
  // Set the middleware to authenticate the user
  const userValidatorLib = userValidator(db);
  // console.log(userValidatorLib);
  // app.use(userValidatorLib.authenticateRequestUsingCookies);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
