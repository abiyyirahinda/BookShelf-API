const {PostBook, GetBooks, GetBookById, DelBookById, ChBookData} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: PostBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: GetBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: GetBookById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: ChBookData,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: DelBookById,
  },
];

module.exports = routes;