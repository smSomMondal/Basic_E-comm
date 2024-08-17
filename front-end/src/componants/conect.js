const mongoose =require('mongoose')

const User=async(data)=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
    const UserSchema=new mongoose.Schema({
        name:String,
        email:String,
        password:String
    })
    const use= mongoose.model("users",UserSchema)
    const result=new use(data)
    const resp=await result.save()
    console.log(resp);
}


module.exports= User