
const express=require("express");
const route=express.Router();
const stuController=require("../controllers/stuController");
route.get("/home",stuController.homepage);
route.get("/about",stuController.aboutpage);
route.get("/subject",stuController.subjectage);
route.get("/fees",stuController.feespage);



module.exports=route;