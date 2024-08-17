const { Int32 } = require('mongodb')
const mongoose=require('mongoose')
require('./config')
const ProductSchema=new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String
})

module.exports= mongoose.model("products",ProductSchema)