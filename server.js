import {app} from "./app.js";
import {connection} from "./data/database.js"

connection(); 

// listening on port
app.listen(process.env.PORT,()=>{
    console.log(`server is listening on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});