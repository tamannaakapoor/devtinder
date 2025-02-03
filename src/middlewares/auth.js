const auth =(req,res,next) =>{
     const token = "XYZ";
     if(token != "XYZabc")
        res.status(404).send("unauthorised acess");
        else next();
}
const objauth=(req,res,next)=>{
    const token="lmn";
    if(token!="lmn") res.status(403).send("unauth object");
    else next();
}
module.exports = {auth,objauth};