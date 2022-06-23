import express from "express"
import mongoose from "mongoose"

import comments from "./routes/v1/comments"
const port = process.env.PORT || 3001
const databaseName = "test"

const mongoURI = (process.env.MONGODB_URI || "mongodb://localhost:27017/") + databaseName
const mongoLocal = mongoURI ? false : true

const app = express()
const v1 = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use("/api/v1", v1)

v1.use("/comments", comments)

app.listen(port, () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("Mongo running on port 27017 - in " + (mongoLocal ? "remote" : "local") + " mode")
    console.log("Server is running on port " + port)
})
