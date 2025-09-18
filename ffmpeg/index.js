import express from 'express'
import cors from 'cors'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'

const app = express()

app.use(
    cors({
        origin:['http://localhost:3000'],
        credentials:true
    })
)

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    next()
})

app.get('/',function(req,res){
    res.json({message:"working"})
})

app.listen(8000,function() {
    console.log("app is running at port 8000");
})