import {app} from "./app.js";
import {connection} from "./data/database.js"

connection(); 

// listening on port
app.listen("4000",()=>{
    console.log("server is listening");
});