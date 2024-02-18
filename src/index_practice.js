import mongoose from "mongoose";
import {DB_NAME} from "./constants"
import express from "express";

const app=express();

(async function(){      
    try{
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error",(error)=>{
            console.log("ERR : ",error);
            throw error
      })
      app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
      })
    }
    catch(err){
        console.log("ERROR : ",err);
        throw err;
    }
})()

connectDB();