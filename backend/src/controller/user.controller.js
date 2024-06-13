const userService = require("../services/user.service.js")

const getUserProfile = async(req,res)=>{
    try {
        const jwt = req.header.authorization?.split(" ")[1];

        if(!jwt){
            return res.status(404).send({message: "token not found"})
        }
        const user = await userService.getUserProfileFromToken(jwt)

        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


const getAllUsers =async(req,res)=>{
    try {
        const users = await userService.getAllUsers();
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}


module.exports = {getUserProfile,getAllUsers}