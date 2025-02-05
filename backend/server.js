const express = require('express')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const port = 7000
const connection = async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('db is connected...')
    } catch (error) {
        console.error(error);
    }
}
connection();

app.listen(port,() =>{
console.log(`server is running on port ${port}...`)
})