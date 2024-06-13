const mongoose = require("mongoose")

const mondbUrl="mongodb+srv://mishrasaurabh501:HdNU2EtbXdeXPA3D@cluster0.tdoxil9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}


module.exports={connectDb}