export default function bookModel(sequelize, dataTypes) {
  return sequelize.define('book', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER,
    },
    title: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: dataTypes.STRING,
    },
    author_image: {
      type: dataTypes.STRING,
    },
    genre: {
      type: dataTypes.STRING,
    },
    // publisher: {
    //   type: dataTypes.STRING,
    // },
    language: {
      type: dataTypes.STRING,
    },
    // isbn: {
    //   type: dataTypes.STRING,
    // },
    summary: {
      type: dataTypes.TEXT,
    },
    content_location: {
      type: dataTypes.STRING,
    },
    cover_page: {
      type: dataTypes.STRING,
    },
    // published_date: {
    //   type: dataTypes.DATE,
    // },
    released_date: {
      type: dataTypes.DATE,
    },
    total_copies: {
      type: dataTypes.INTEGER,
    },
    created_at: {
      allowNull: false,
      type: dataTypes.DATE,
    },
    updated_at: {
      allowNull: false,
      type: dataTypes.DATE,
    },
  }, { underscored: true });
}
