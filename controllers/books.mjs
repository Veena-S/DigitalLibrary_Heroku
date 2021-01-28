/**
 * Controller function for books table
 * @param db - db model
 */
export default function books(db) {
  /**
   * Function that searches the books table with requested criteria
   * and to return the matching book data
   * @param request - HTTP request received
   * @param response - HTTP response
   */
  const search = async (request, response) => {
    // it will not return the book data.
    // That should be requested through readBook functionality, with proper authentication
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
    search, readBook, borrowBook, returnBook, reserveBook,
  };
}
