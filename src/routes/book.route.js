const express = require("express");
const router = express.Router();

const bookController = require("../controller/book.controller");

router.post("/createBook",bookController.createBook)
router.get("/getAllBooks",bookController.getAllBooks)
router.get("/getBookById/:id",bookController.getBookById)
router.put("/updateBookById/:id",bookController.updateBookById)
router.delete("/deleteBookById/:id",bookController.deleteBookById)


module.exports = router;

