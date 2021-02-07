export default function userBookListModel(sequelize, dataTypes) {
  return sequelize.define('user_book_list', {
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
    downloaded_date: {
      type: dataTypes.DATE,
    },
    read_date: {
      type: dataTypes.DATE,
    },
    last_read_page: {
      type: dataTypes.INTEGER,
    },
  }, { underscored: true, timestamps: false });
}
