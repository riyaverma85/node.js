
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

//==================================================NEW MODULE(KHUD KA BANAYA MODULE-CYBROM)=================================================================

// const http=require("http");
// const Nm= require("./cybrom")
// http.createServer((req,res)=>{
//     res.write("<h1>Welcome to cybrom class<h1/>");
//     res.write(Nm.myName());
//     res.write(Nm.myClass());
//     res.end("<h3>thank you for visiting</h3/>");
// }).listen(5000)

//==================================================FILE SYSTEM MODULE(FS-SHIV.TXT KA DATA DIKH JAYEGA )===========================================================================================
// var http=require("http");
// var fs=require("fs");
// http.createServer((req,res)=>{
//     fs.readFile("shiv.txt",(err,data)=>{
//         if(err) throw err;
//         res.write(data);
//         res.end();
//     })
// }).listen(7000);

//===========================================FILE SYSTEM MODULE(NYII FILE CREATE KARNA APPEND FILE ME APPEND KA USE KARKE)===================================================================================
//isme ye file create ho jayegi agar nahi hai to aur agar hai to usme data append ho jayega use dusra data side me append hota h
// const fs=require("fs");
// fs.appendFile("ram.txt"," I am from betul",(err)=>{
//     if(err) throw err;
//     console.log("File Created");
// })


//===========================================FILE SYSTEM MODULE(ISSE BHI NYII FILE CREATE KARNA OPEN KA USE KARKE)=============================================================
//lekin isme file me data nhii aata h file to create ho jati hlekin khali rehti hai
// const fs=require("fs");

// fs.open("pre.pdf","w",(err,file)=>{
//     if(err) throw err;
//     console.log("File Created");
// })

//============================================FILE SYSTEM MODULE(ISSE BHI NYII FILE CREATE KARNA OPEN KA USE KARKE)============================================================
//LEKIN isme data aa jata file me but lekin agar data me change krte h to ohle vale data se replace ho jata h phle ka s=data chala jata h
// const fs=require("fs");

// fs.writeFile("proj.txt","i am soft developer",(err)=>{
//     if(err) throw err;
//     console.log("File Created");
// })
  

//=============================================FILE DELETE(UNLINK KA USE KARKE)=======================================================================================
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

//=======================================================================================================================================================

const http=require("http");
const uc=require("uppercase");
http.createServer((req,res)=>{
     res.write(uc("<h1>Welcome to my Node.js server</h1>"));
     res.end("<h1>server is running on port 4000</h1>");
}).listen(4000);