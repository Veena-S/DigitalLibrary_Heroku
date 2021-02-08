import { resolve } from 'path';
import db from './models/index.mjs';

// Importing controllers
import userValidator from './controllers/userValidator.mjs';
import users from './controllers/users.mjs';
import books from './controllers/books.mjs';

export default function routes(app) {
  // Set the middleware to authenticate the user
  const userValidatorLib = userValidator(db);
  // app.use(userValidatorLib.authenticateRequestUsingCookies);
  const userController = users(db);
  const booksController = books(db);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html')); });

  app.post('/signup', userController.handleNewUserRegister);
  app.post('/login', userController.handleLoginRequest);
  app.delete('/logout', userController.handleLogoutRequest);
  app.get('/isLoggedIn', userValidatorLib.authenticateRequestUsingCookies, userController.handleLoggedInValidation);

  app.get('/all', booksController.getAllBooks);
  app.get('/search', booksController.search);
  app.get('/search/:bookId', booksController.searchByBookId);
  app.post('/read/:bookId', userValidatorLib.authenticateRequestUsingCookies, booksController.readBook);
}
