const dotenv = require("dotenv").config()
const express = require("express")
// const connectDB = require("./config/connectDB")
const mongoose = require("mongoose")
const cors = require("cors")
// const Task = require("./models/taskModel")
const taskRoutes = require("./routes/taskRoute")

const app = express()

// connectDB()

const PORT = process.env.PORT || 5000

// Connect Database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch(error => {
    console.log(error)
  })

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mern-todo-vxf3.onrender.com"]
  })
)
app.use(taskRoutes)

// const logger = (req, res, next) => {
//   console.log("Middleware ran")
//   console.log(req.method)
//   next()
// }

// Routes
app.get("/", (req, res) => {
  res.send("Home Page")
})

// const startServer = async () => {
//   try {
//     await connectDB()
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`)
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
// startServer()
