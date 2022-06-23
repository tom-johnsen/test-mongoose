import express from "express"
import mongoose from "mongoose"

import comments from "./routes/comments"

const app = express()
const port = process.env.PORT || 3001
const databaseName = "test"

const mongoURI =
    (process.env.MONGODB_URI || "mongodb://localhost:27017/") + databaseName

const mongoLocal = mongoURI ? false : true

app.use(express.json())
app.use("/", comments)

app.listen(port, () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log(
        "Mongo running on port 27017 - in " +
            (mongoLocal ? "remote" : "local") +
            " mode"
    )
    console.log("Server is running on port " + port)
})
