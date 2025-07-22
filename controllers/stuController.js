
const homepage=(req,res)=>{
    res.send("<h1>Welcome to the home page</h1>");
}
const aboutpage=(req,res)=>{
    res.send("<h1>Welcome to the about page</h1>");
}
const subjectage=(req,res)=>{
    res.send("<h1>Welcome to the subject page</h1>");
}
const feespage=(req,res)=>{
    res.send("<h1>Welcome to the fees page</h1>");
}

module.exports={
    homepage,
    aboutpage,
    subjectage,
    feespage
}