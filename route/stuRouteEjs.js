
const express=require("express");
const route=express.Router();
const controllerEjs=require("../controllers/controllerEjs");
route.get("/",controllerEjs.homepage)
route.get("/about",controllerEjs.aboutpage)
route.get("/service",controllerEjs.servicepage)
route.get("/gallery",controllerEjs.gallerypage)
route.get("/contact",controllerEjs.contactpage)


module.exports=route;