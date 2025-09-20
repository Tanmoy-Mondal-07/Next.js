import express from 'express'
import cors from 'cors'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import path from "path"
import fs from "fs"
import { exec } from "child_process"
import { error } from 'console'
import { stderr, stdout } from 'process'

const app = express()

//multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + uuidv4() + path.extname(file.originalname))
    }
})

//multer config
const upload = multer({ storage: storage })

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

app.post("/upload", upload.single('file'), function (req, res) {
    const lessonId = uuidv4()
    const videoPath = req.file.path
    const outputPath = `./uploads/courses/${lessonId}`
    const hlsPath = `${outputPath}/index.m3u8`
    console.log("hlspath", hlsPath)

    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true })
    }

    //ffmpeg
    const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath}`

    exec(ffmpegCommand, (error, stdout, stderr))
})

app.listen(8000, function () {
    console.log("app is running at port 8000");
})