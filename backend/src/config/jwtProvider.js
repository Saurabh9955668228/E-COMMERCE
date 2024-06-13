const jwt=require("jsonwebtoken");
const { get } = require("mongoose");


const SECRET_KEY="ersdcxzaqwplkmnbvcfghjuytred09876hb45nbm"

const generateToken=(userId)=>{
    const token=jwt.sign({userId},SECRET_KEY,{expiresIn:"48hr"})
    return token;
}



const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECRET_KEY)
    return decodedToken.userId;
}

module.exports={generateToken,getUserIdFromToken}