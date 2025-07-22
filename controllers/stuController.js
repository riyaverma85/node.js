
const namepage=(req,res)=>{
    res.send("<h1>Welcome to the home page</h1>");
}
const postpage=(req,res)=>{
    res.send("<h1>Welcome to the about page</h1>");
}
const salarypage=(req,res)=>{
    res.send("<h1>Welcome to the subject page</h1>");
}
const citypage=(req,res)=>{
    res.send("<h1>Welcome to the fees page</h1>");
}

module.exports={
    namepage,
    postpage,
    salarypage,
    citypage
}