const jwt = require("jsonwebtoken");
const secret = require ("../config");

// middleware for handling auth
async function adminMiddleware(req,res,next){
   const token = req.headers.authorization;
   const words = token.split(" ");
   const jwtToken = words[1];
   try{
      const verifiedToken = await jwt.verify(token,secret)
      if(verifiedToken.username){
         next();
      }else{
         return res.status(401).json({
            msg : " You are not authenticated"
         })
      }
   }catch(err){
      return res.status(401).json({
         msg : " You are not authenticated"
      })
   }
}

module.exports = adminMiddleware;