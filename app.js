import express from "express";
// import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

import { config } from "dotenv";
config({
    path: "./data/config.env",
  }); 
// console.log(process.env.val);    
export const app = express();  

// using middlewares to fetch data from body through postman api 
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// using routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);
 
// routing
app.get("/",(req,res)=>{
    res.send("<h1> hi this is ritik </h1>");
});


//using error middleware
app.use(errorMiddleware);