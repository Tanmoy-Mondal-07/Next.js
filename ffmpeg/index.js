import express from 'express'
import cors from 'cors'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import path from "path"

const app = express()

//multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + uuidv4() + path.extname)
    }
})

app.use(
    cors({
        origin: ['http://localhost:3000'],
        credentials: true
    })
)

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static("uploads"))

app.get('/', function (req, res) {
    res.json({ message: "working" })
})

app.listen(8000, function () {
    console.log("app is running at port 8000");
})