const express = require('express');
const { connectDb } = require("./config/db")

const app = express();

app.get('/',(req,res)=>{
  return res.status(200).send({message:"Welcome To E-commerce ",status:true})
})


const PORT = process.env.PORT || 3000;


app.listen(PORT, async()=>{
    await connectDb();
    console.log (`Server is running on port ${PORT}`);
  }
);
