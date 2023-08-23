import mongoose from "mongoose";

// for connecting with database
export const connection = ()=>{
    // for connecting with database
    console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI,{dbName: "todolist"})
.then(()=>console.log("Connected to Database Successfully"))
.catch((err)=>console.log(err));
} 