
const express=require("express");
const route=express.Router();
const stuController=require("../controllers/stuController");

route.get("/name",stuController.namepage);
route.get("/post",stuController.postpage);
route.get("/salary",stuController.salarypage);
route.get("/city",stuController.citypage);



module.exports=route;