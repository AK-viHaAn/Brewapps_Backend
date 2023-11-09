const { BadRequest } = require("http-errors");
const Book = require("../model/Book");

exports.createNewBook = async (data) => {
  const existingBook = await Book.findOne({ title: data.title });
  if (existingBook) {
    throw new BadRequest("A book with the same title already exists.");
  }
  const newBook = await Book.create(data);
  return newBook;
};

exports.getAllBooks = async () => {
  const allBooks = await Book.find();
  return allBooks;
};

exports.getBookById = async (bookId) => {
  const book = await Book.findById(bookId);
  if (!book) {
    throw new BadRequest("No Book Found");
  }
  return book;
};

exports.updateBookById = async (params,body) => {
    const updatedDetails = {}
    const book = await Book.findOne({_id:params,isDeleted:false});
    if (!book) {
        throw new BadRequest("No Book Found");
    }
    const { title,author,summary } = body.value
    if(title !== undefined){
        updatedDetails["title"] = title
    }
    if(author !== undefined){
        updatedDetails["author"] = author
    }
    if(summary !== undefined){
        updatedDetails["summary"] = summary
    }
    console.log(updatedDetails);
    const updatedBook = await Book.findByIdAndUpdate({_id:params},{$set:updatedDetails},{new:true}).lean();
    return updatedBook
  };

  exports.deleteBookById = async (bookId) => {
    const book = await Book.findOne({_id:bookId,isDeleted:false});
    if (!book) {
        throw new BadRequest("No Book Found");
    }
    const deleteBook = await Book.findByIdAndUpdate({_id:bookId},{$set:{isDeleted:true}},{new:true})
    return deleteBook
  }
