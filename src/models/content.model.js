const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const Content = mongoose.model(
  "Content",
  new mongoose.Schema({
    _id: ObjectId,
    title: String,
    keywords:String,
    category:String,
    summary:String,
    authors:String,
    credibility:Number,
    link:String
  }),
  "content"
);

module.exports = Content;