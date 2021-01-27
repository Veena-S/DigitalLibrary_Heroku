export default function userBookLoanModel(sequelize, dataTypes) {
  return sequelize.define('user_book_loan', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER,
    },
    user_id: {
      type: dataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    book_id: {
      type: dataTypes.INTEGER,
      references: {
        model: 'books',
        key: 'id',
      },
    },
    borrowed_date: {
      type: dataTypes.DATE,
    },
    borrowed_count: {
      type: dataTypes.DATE,
    },
    expected_return_date: {
      type: dataTypes.DATE,
    },
    returned_date: {
      type: dataTypes.DATE,
    },
  }, { underscored: true, timestamps: false });
}
