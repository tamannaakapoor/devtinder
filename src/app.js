const express=require('express');
const app=express();
const {auth} =require('./middlewares/auth.js');
// app.use("/obj",auth,(req,res)=>{
//     console.log("successfully");
//     res.send("loggined successfully");
// })
app.get("/obj/:userid/:pw/:name",(req,res)=>{
    console.log(req.params);
    res.send({
        "name":"tamanna",
    "city":"varanasi"})
})
app.get("/obj",(req,res)=>{
    console.log(req.query);
    res.send({
        "name":"tamanna",
    "city":"varanasi"})
})

app.post("/obj",(req,res)=>{
    res.send("data saved successfully");
})
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