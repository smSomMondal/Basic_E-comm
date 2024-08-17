const { Int32 } = require('mongodb')
const mongoose=require('mongoose')
require('./config')
const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    v:Number
})

module.exports= mongoose.model("users",UserSchema)