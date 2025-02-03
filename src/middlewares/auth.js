const auth =(req,res,next) =>{
     const token = "XYZ";
     if(token != "XYZjgu")
        res.status(404).send("unauthorised acess");
        else next();
}
module.exports = {auth};