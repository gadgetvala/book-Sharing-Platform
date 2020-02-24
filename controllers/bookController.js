const Book = require("./../models/bookModel");

exports.getAllBook = async (req, res) => {
  try {
    const book = await Book.find(req.query);

    res.status(200).json({
      status: "success",
      data: {
        book
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      data: { message: err.message }
    });
  }
};

exports.createBook = async (req, res) => {
  try {
    if (req.body.tag) {
      const tagArray = req.body.tag.split(" ");
    }
    const tagArray = "";

    const book = await Book.create({
      subject: req.body.subject,
      department: req.body.department,
      bookName: req.body.bookName,
      author: req.body.author,
      bookImage: req.body.bookImage,
      bookType: req.body.bookType,
      tag: tagArray,
      doner: req.body.doner
    });

    res.status(201).json({
      status: "success",
      data: {
        book
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      data: { message: err.message }
    });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        book
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      data: { message: err.message }
    });
  }
};

exports.search = async (req, res) => {
  try {
    const regex = new RegExp(req.body.search, "i");

    const book = await Book.find({
      bookName: regex
    });

    res.status(200).json({
      status: "success",
      data: {
        book
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      data: { message: err.message }
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: "success",
      data: {
        book
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      data: { message: err.message }
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: "Book Deleted successfully"
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      data: { message: err.message }
    });
  }
};
