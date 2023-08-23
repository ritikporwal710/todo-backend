export const errorMiddleware = (err,req,res,next)=>{
    return res.status(404).json({
        success: false,
        message: "failed in error.js of middleware",
    });
}   