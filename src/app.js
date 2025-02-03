const express=require('express');
const app=express();
const {auth} =require('./middlewares/auth.js');
app.get("/user/login",(req,res)=>{
         console.log("login successfully");
         res.send("login successfully");
         
});
app.get("/user",auth,(req,res)=>{
    console.log("successfully");
    res.send("loggined successfully");
})
app.listen(7777,()=>{
      console.log("app is listening at 7777");
})