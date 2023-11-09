const { BadRequest } = require("http-errors");
const books = require("../services/book.services");
const validation = require("../validator/validator");

exports.createBook = async (req, res) => {
  const { error } = validation.createBookValidation(req.body);
  if (error) throw BadRequest(error.details[0].message);
  const createBook = await books.createNewBook(req.body);
  res.json({
    status: true,
    msg: "Book Created",
    data: createBook,
  });
};

exports.getAllBooks = async (req, res) => {
  const allBooks = await books.getAllBooks();
  res.json({
    status: true,
    msg: `${allBooks.length} Books Found`,
    data: allBooks,
  });
};

exports.getBookById = async (req, res) => {
  const bookId = req.params.id;
  const { error } = validation.getBookByIdValidation(bookId);
  if (error) throw BadRequest(error.details[0].message);
  const specificBook = await books.getBookById(bookId);
  res.json({
    status: true,
    msg: "Book Found",
    data: specificBook,
  });
};

exports.updateBookById = async (req, res) => {
  
  const { params, body } = validation.updateBookByIdValidation(req.params, req.body);
  if (params.error) {
    const errorMessage = params.error.details[0].message;
    res.status(400).json({ error: errorMessage });
  } else if (body.error) {
    const errorMessage = body.error.details[0].message;
    res.status(400).json({ error: errorMessage });
  } else {
    const updateBook = await books.updateBookById(params.value.id, body);
    res.json({
      status: true,
      msg: "Book Updated",
      data: updateBook,
    });
  }
};


exports.deleteBookById = async (req, res) => {
    const bookId = req.params.id;
    const { error } = validation.deleteBookByIdValidation(bookId);
  if (error) throw BadRequest(error.details[0].message);
      const deleteBook = await books.deleteBookById(bookId);
      res.json({
        status: true,
        msg: "Book Deleted",
      });
  };