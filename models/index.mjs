import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';

import bookModel from './book.mjs';
import userModel from './user.mjs';
import userBookLoanModel from './userBookLoan.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.User = userModel(sequelize, Sequelize.DataTypes);
db.Book = bookModel(sequelize, Sequelize.DataTypes);
db.UserBookLoan = userBookLoanModel(sequelize, Sequelize.DataTypes);

// A book can be borrowed by many users
// A user can borrow many books
// Many to Many relation through the table user_book_loans
db.User.belongsToMany(db.Book, { through: 'user_book_loans' });
db.Book.belongsToMany(db.User, { through: 'user_book_loans' });

db.User.hasMany(db.UserBookLoan);
db.UserBookLoan.belongsTo(db.User);

db.Book.hasMany(db.UserBookLoan);
db.UserBookLoan.belongsTo(db.Book);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
