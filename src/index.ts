import express from "express"
import mongoose from "mongoose"

const app = express()
const port = process.env.PORT || 3001

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/test"
const mongoLocal = mongoURI ? false : true

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
