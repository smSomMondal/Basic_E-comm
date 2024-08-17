const express = require('express')
const cors = require('cors')
require('./db/config')
const User = require('./db/User')
const jwt=require('jsonwebtoken')
const jwtKey='e-comm'
const Product = require('./db/Product')
const app = express()
app.use(express.json())
app.use(cors())

app.post('/regiester', async (req, res) => {
    let Users = new User(req.body)
    let result = await Users.save()
    result = result.toObject()
    delete result.password
    res.send(result)
})

app.post('/login', async (req, res) => {

    console.log(req.body);
    if (req.body.password && req.body.email) {
        let Users = await User.findOne(req.body).select('-password')
        if (Users) {
            //res.send(Users)
            jwt.sign({Users},jwtKey,{expiresIn:"2m"},(err,token)=>{
                if(err){
                    res.send("not found")
                }else{
                    res.send({Users,token})
                }
            })

        } else {
            res.send("not found")
        }

    }
    else {
        res.send("not fiund")
    }
    // res.send(Users)
})

app.post('/add-product', async (req, res) => {
    // res.send("ready")
    let product = new Product(req.body)
    let result = await product.save()
    res.send(result)
})

app.get('/products', async (req, res) => {
    let products = await Product.find()
    res.send(products);
})

app.delete('/product/:id', async (req, res) => {
    // res.send(req.params.id)
    try {
        let result = await Product.deleteOne({ _id: req.params.id })
        res.send(result)
    } catch (err) {
        res.send(err)
    }

})

app.get('/product/:id', async (req, res) => {
    // res.send(req.params.id)
    try {
        let result = await Product.findOne({ _id: req.params.id })
        if (result) {
            res.send(result)
        }
        else {
            res.send("not found")
        }
    } catch (err) {
        res.send(err)
    }
})

app.put('/product/:id', async (req, res) => {
    // res.send(req.params.id)
    let result = await Product.updateOne({ _id: req.params.id },
        {
            $set:req.body
        }
    )
    res.send(result)

})
app.listen(4000)