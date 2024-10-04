const mongoose = require("mongoose");

const TodoList = mongoose.Schema({
  TaskName: { type: String },
  TaskDescription: { type: String },
});

const Todo = new mongoose.model("Todo", TodoList);
module.exports = Todo;
