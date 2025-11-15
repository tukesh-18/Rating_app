import express from "express";
import ConnectDB from "./DB/DB.js";

const app = express();
ConnectDB();
app.use(express.json());


app.use((req,res)=>{
    console.log("Middleware hits");
})



app.listen(4500, ()=>{
    console.log("server is listning on p[ort no 4500");
})