import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express()

//use method is used for middlewares
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//accepting json
app.use(express.json({limit:"16kb"}))

//configuration on URL
app.use(express.urlencoded({extended:true,limit:"16kb"}))

//public folder is used for storing images
app.use(express.static("public"))


//storing secure COOKIES for server
app.use(cookieParser());




export {app}