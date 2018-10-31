let express = require('express')
let bodyParser = require('body-parser')
let { ObjectID } = require('mongodb')

let { mongoose } = require('./db/mongoose.js')

let { Customer } = require('./models/customer.js')
let { Order } = require('./models/order.js')
let { Product } = require('./models/product.js')
let { Seller } = require('./models/seller.js')
let { User } = require('./models/user.js')

let app = express()
let port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/products',(req,res)=>{
    Product.find().then((products)=>{
        res.send({products})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get('/customers',(req,res)=>{
    Customer.find().then((customers)=>{
        res.send({customers})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get('/sellers',(req,res)=>{
    Seller.find().then((sellers)=>{
        res.send({sellers})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get('/orders',(req,res)=>{
    Order.find().then((orders)=>{
        res.send({orders})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get('/users',(req,res)=>{
    User.find().then((users)=>{
        res.send({users})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.post('/users', (req, res) => {
    let user= new User({
        name:req.body.name,
        username:req.body.username,
        type:req.body.type,
        password:req.body.password
    })

    user.save().then((doc)=>{
        res.send(doc)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.post('/products', (req, res) => {
    let product = new Product({
        name: req.body.name,
        brand: req.body.brand,
        desc: req.body.desc,
        price: req.body.price,
        reviews: req.body.reviews,
        seller:req.body.seller
    })

    product.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/sellers', (req, res) => {
    let seller = new Seller({
        name: req.body.name,
        address: req.body.address,
        rating: req.body.rating,
        contact: req.body.contact
    })

    seller.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/customers', (req, res) => {
    let customer = new Customer({
        name: req.body.name,
        city: req.body.city,
        zip_code: req.body.zip_code,
        contact: req.body.contact
    })

    customer.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/orders', (req, res) => {
    let order = new Order({
        cust_name: req.body.cust_name,
        ship_address: req.body.ship_address,
        price: req.body.price,
        quantity: req.body.quantity,
        products:req.body.products
    })

    order.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.listen(port)