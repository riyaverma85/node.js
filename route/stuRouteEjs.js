
const express=require("express");
const route=express.Router();
const controllerEjs=require("../controllers/controllerEjs");
route.get("/",controllerEjs.homepage)
route.get("/About",controllerEjs.homepage)


module.exports=route;