const express = require("express");
const route = express.Router();
const Todo = require("../schema/Todo");
require("../db");
route.get("/", (req, res) => {
  res.send("home page");
});

route.post("/addTask", async (req, res) => {
  try {
    const { TaskName, TaskDescription } = req.body;
    const task = new Todo({ TaskName, TaskDescription });
    await task.save();
    res.send("task added");
  } catch (e) {
    console.log(e);
    res.send("not added");
  }
});

route.get("/getTasks", async (req, res) => {
  try {
    let t = await Todo.find();
    res.send(t);
  } catch (e) {
    console.log(e);
    res.send("empty");
  }
});

route.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let Data = await Todo.findOne({ _id: id });
    if (Data) {
      let id = Data._id;
      await Todo.findByIdAndDelete(id);
      res.send("Record removed");
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    console.log(error.message);
  }
});
route.put("/updateTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let Data = await Todo.findOne({ _id: id });
    if (Data) {
      let id = Data._id;

      await Todo.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res
        .status(200)
        .json({ success: true, message: "Task updated successfully" });
    } else {
      res.send("not found");
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = route;
