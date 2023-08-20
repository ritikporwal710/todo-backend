import mongoose from "mongoose";

// for connecting with database
export const connection = ()=>{
    // for connecting with database
mongoose.connect("mongodb://127.0.0.1:27017",{dbName: "todolist"})
.then(()=>console.log("Connected to Database Successfully"))
.catch((err)=>console.log(err));
} 