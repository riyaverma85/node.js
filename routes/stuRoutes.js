
const express=require("express");
const route=express.Router();

route.get("/home",(req,res)=>{
   res.send("<h1>Welcome to my contact page</h1>");
})
route.get("/subject",(req,res)=>{
   res.send("<h1>Welcome to my contact page</h1>");
})
route.get("/fees",(req,res)=>{
   res.send("<h1>Welcome to my contact page</h1>");
})
route.get("/result",(req,res)=>{
   res.send("<h1>Welcome to my contact page</h1>");
})


module.exports=route;
