
// const http=require("http");
// http.createServer((req,res)=>{
//     res.write("<h1>My Node first class<h1/>");
//     res.end();
// }).listen(4000 )

// const http=require("http");
// http.createServer((req,res)=>{
//     res.write("<h1>i am shivani class of node js<h1/>");
//     res.end();
// }).listen(8000)

const http=require("http");
const Nm= require("./cybrom")
http.createServer((req,res)=>{
    res.write("<h1>Welcome to cybrom class<h1/>");
    res.write(Nm.myName());
    res.write(Nm.myClass());
    res.end("<h3>thank you for visiting</h3/>");
}).listen(5000)


// var http=require("http");
// var fs=require("fs");
// http.createServer((req,res)=>{
//     fs.readFile("shiv.txt",(err,data)=>{
//         if(err) throw err;
//         res.write(data);
//         res.end();
//     })
// }).listen(7000);



// const fs=require("fs");
// fs.appendFile("ram.txt"," I am from betul",(err)=>{
//     if(err) throw err;
//     console.log("File Created");
// })




// const fs=require("fs");

// fs.open("pre.pdf","w",(err,file)=>{
//     if(err) throw err;
//     console.log("File Created");
// })

// const fs=require("fs");

// fs.writeFile("proj.txt","i am soft developer",(err)=>{
//     if(err) throw err;
//     console.log("File Created");
// })

// const fs=require("fs");

// fs.unlink("proj.txt",(err)=>{
//     if(err) throw err;
//     console.log("File Deleted");
// })


//=============================================FILE RENAME==================================================================================
// const fs=require("fs");

// fs.rename( "pro.txt","proto.txt",(err)=>{
//     if(err) throw err;
//     console.log("File Renamed!!");
// })