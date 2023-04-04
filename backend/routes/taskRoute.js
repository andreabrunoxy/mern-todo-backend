const express = require("express")
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask
} = require("../controllers/taskController")

// const Task = require("../models/taskModel")

const router = express.Router()

// CREATE a Task
router.post("/api/tasks", createTask)

// GET all Tasks
router.get("/api/tasks", getTasks)

// GET a single Task
router.get("/api/tasks/:id", getTask)

// DELETE a single Task
router.delete("/api/tasks/:id", deleteTask)

// UPDATE a single Task
router.patch("/api/tasks/:id", updateTask)

module.exports = router
