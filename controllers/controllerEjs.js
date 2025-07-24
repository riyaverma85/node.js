
const homepage=(req,res)=>{
    res.render("home");
}
const aboutpage=(req,res)=>{
    res.render("about");
}
const servicepage=(req,res)=>{
    res.render("service");
}
const gallerypage=(req,res)=>{
    res.render("gallery");
}
const contactpage=(req,res)=>{
    res.render("contact");
}

module.exports={
    homepage,
    aboutpage,
    servicepage,
    gallerypage,
    contactpage
}