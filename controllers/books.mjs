/**
 * Controller function for books table
 * @param db - db model
 */
export default function books(db) {
  const getAllBooks = async (request, response) => {
    try {
      const booksList = await db.Book.findAll(
        // { attributes: ['id', 'title', 'author', 'genre', 'language',
        // 'summary', 'cover_page', 'created_at'],}
      );
      response.send({ books: booksList });
    }
    catch (error) {
      response.send(error);
    }
  };

  /**
   * Function that searches the books table with requested criteria
   * and to return the matching book data
   * @param request - HTTP request received
   * @param response - HTTP response
   */
  const search = async (request, response) => {
    // it will not return the book data.
    // That should be requested through readBook functionality, with proper authentication
    try {
      const { key } = request.query;
      const { value } = request.query;
      console.log(`search: key = ${key}, value = ${value}  `);
      const booksList = await db.Book.findAll({
        attributes: ['id', 'title', 'author', 'genre', 'language', 'summary', 'cover_page', 'created_at'],
        where: { [key]: { [db.sequelize.like]: `%${value}%` } },
      });
      response.send({ books: booksList });
    }
    catch (err) {
      response.send(err);
    }
  };

  /**
   *
   * @param request
   * @param response
   */
  const searchByBookId = async (request, response) => {
    try {
      const booksList = await db.Book.findByPk(request.params.bookId);
      response.send({ books: booksList });
    }
    catch (err) {
      response.send(err);
    }
  };

  /**
   * Function that gets the requested book file from the server
   * and allows the user to read the book
   * @param request
   * @param response
   */
  const readBook = async (request, response) => {

  };

  const borrowBook = async (request, response) => {

  };

  const returnBook = async (request, response) => {

  };

  const reserveBook = async (request, response) => {

  };

  return {
    getAllBooks, search, searchByBookId, readBook, borrowBook, returnBook, reserveBook,
  };
}
