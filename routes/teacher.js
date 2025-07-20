


const express=require("express");
const route=express.Router();

route.get("/teacherinfo",(req,res)=>{
   res.send("<h1>Welcome to my teacherinfo page</h1>");
})
route.get("/address",(req,res)=>{
   res.send("<h1>Welcome to my address page</h1>");
})
route.get("/salary",(req,res)=>{
   res.send("<h1>Welcome to my salary page</h1>");
})
route.get("/mydepartment",(req,res)=>{
   res.send("<h1>Welcome to my department page</h1>");
})
route.get("/work",(req,res)=>{
   res.send("<h1>Welcome to my work page</h1>");
})


module.exports=route;
