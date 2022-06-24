import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import comments from "./routes/v1/comments"

const port = process.env.PORT || 3001
const mongoConnector = process.env["MONGODB_URI"] || "mongodb://localhost"
const mongoDB = process.env["MONGODB_DATABASE"] || "no_env"

const app = express()
const v1 = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use("/api/v1", v1)

v1.use("/comments", comments)

app.listen(port, () => {
    mongoose.connect(new URL(mongoDB, mongoConnector).toString(), { useNewUrlParser: true, useUnifiedTopology: true })
    console.log(`MongoDB connected to database \"${mongoDB}\".`)
    console.log(`Server is running on port ${port}`)
    console.log("API version 1 is available at /api/v1")
})
