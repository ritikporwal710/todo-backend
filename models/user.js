import mongoose from "mongoose";

// creating schema for the user login
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// creating models for the schema of users
export const User = new mongoose.model("User",schema); 