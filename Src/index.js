const express = require('express');
require('./db/mongoose');
const Signup = require('./models/signup');
const Login = require ( './models/login');
const Order = require ('./models/order');
const cors = require("cors");

const app = express();
const port = process.env.PORT ||8080;

app.use(express.json());
app.use(cors());

app.post('/signup', (req, res) => {
    const signup = new Signup(req.body)
    
    signup.save().then(() => {
        res.send(signup)
    })
    .catch((error) => {
        res.status(400).send(error)
    })
});
 app.get('/signup', (req,res) =>{
    Signup.find({})
    .then((signup) => {
        res.json(signup);
    })
    .catch((error) => {
        res.status(500).send(error);
     });
 });

 app.post('/login', (req, res) => {
    const login = new Login(req.body)
    login
    .save()
    .then(() => {
        res.send(login)
    })
    .catch((e) => {
        res.status(400).send(e)
    });
});
 app.get('/login', (req,res) =>{
    Login.find({})
    .then((login) => {
        res.json(login);
    })
    .catch((error) => {
        res.status(500).send(error);
     });
 });
 app.post('/order', (req, res) => {
    const order = new Order(req.body)
    order.save().then(() => {
        res.send(order)
    }).catch((e) => {
        res.status(400).send(e)
    });
});
 app.get('/order', (req,res) =>{
    Order.find({})
    .then((order) => {
        res.json(order);
    })
    .catch((error) => {
        res.status(500).send(error);
     });
 });

 app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
 