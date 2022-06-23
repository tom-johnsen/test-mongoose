import { isValidObjectId } from "mongoose"
import express from "express"
import createError from "http-errors"

import commentsModel from "../schemas/comments"

const router = express.Router()

// GETALL, GET, POST, PUT, DELETE

router.get("/", async (req, res, next) => {
    try {
        const result = await commentsModel.find()
        res.send(result)
    } catch (error) {
        next(error)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        if (!isValidObjectId(req.params.id))
            next(createError(400, `ID ${req.params.id} is invalid`))
        else {
            const result = await commentsModel.findById(req.params.id)
            if (!result)
                next(createError(404, `ID ${req.params.id} was not found`))
            else res.status(200).send(result)
        }
    } catch (error) {
        next(error)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const entry = new commentsModel(req.body)
        const result = await entry.save()
        res.status(201).send(result)
    } catch (error) {
        next(error)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        let result
        if (!isValidObjectId(req.params.id))
            next(createError(400, `ID ${req.params.id} is invalid`))
        else
            result = await commentsModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    runValidators: true,
                    new: true,
                    useFindAndModify: false
                }
            )

        if (!result) next(createError(404, `ID ${req.params.id} was not found`))
        else res.status(200).send(result)
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        let result
        if (!isValidObjectId(req.params.id))
            next(createError(400, `ID ${req.params.id} is invalid`))
        else
            result = await commentsModel.findByIdAndDelete(req.params.id, {
                useFindAndModify: false
            })

        if (result) res.status(200).send("Deleted")
        else next(createError(404, `ID ${req.params.id} was not found!`))
    } catch (error) {
        next(error)
    }
})

export default router
