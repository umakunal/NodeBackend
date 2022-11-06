const { ObjectId } = require("mongodb");
const BookModel = require("../Model/BookModel");

exports.index = async (req, res) => {
  const Books = await BookModel.find();
  res.json(Books);
};

exports.store = async (req, res) => {
  try {
    await BookModel.create(req.body);
    res.status(201).json({ data: "Book is stored" });
  } catch (error) {
    res.json(error.errors);
  }
};

exports.show = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const Book = await BookModel.findById({ _id });
  res.json(Book);
};

exports.update = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await BookModel.updateOne({ _id }, { $set: req.body });
  res.json({ data: "Book is updated" });
};

exports.delete = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await BookModel.deleteOne({ _id });
  res.status(204).json();
};
