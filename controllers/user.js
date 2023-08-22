import { User} from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config({
    path: "./data/config.env",
  });

export const login = async (req,res,next)=>{
    try {
        const {email,password} = req.body;

    const user = await User.findOne({email}).select("+password");

    if(!user)
    {
        return res.status(404).json({
            success: false,
            message: "Invalid Email or Password",
        });
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch)
    {
        return res.status(404).json({
            success: false,
            message: "Invalid Email or Password",
        });
    }

    sendCookie(user,res,`welcome back Ms. ${user.name}`,200);

    } catch (error) {
        next(error);   
    }
}


export const register = async (req,res,next)=>{
    try {
        const {name,email,password} = req.body; 

    let user = await User.findOne({email});

    if(user)
    {
        return res.status(404).json({
            success: false,
            message: "user already exist",
        });
    }

    const hashedPassword = await bcrypt.hash(password,10);
    user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    sendCookie(user,res,"Registered Successfully",201);
    } catch (error) {
        next(error);
    }
};

export const getMyProfile =  (req,res)=>{
    res.status(200).json({
        success: true,
        user: req.user,
    })
};


export const logout = (req,res)=>{
    res.status(200).cookie("token","",{
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Development"? "lax" : "none",
        secure: process.env.NODE_ENV === "Development"? false: true,
    }).json({
        success: true,
        message: "log out done", 
    });

};
