const express = require('express')
const app = express()
const { Cart } = require('./models')

const PORT = 8080;

app.use(express.json())

//GET
app.get('/carts', (req, res) => {
    Cart.findAll()
        .then(carts => {
            res.status(200).json(carts)
        })
})

// GET by ID
app.get('/carts/:id', (req, res) => {
    Cart.findOne({
        where: { id: req.params.id }
    })
        .then(cart => {
            res.status(200).json(cart)
        })
})

//POST

app.post('/carts', (req, res) => {
    Cart.create({
        itemname: req.body.itemname,
        price: req.body.price,
        quantity: req.body.quantity,
        type: req.body.type,
        invoicenumber: req.body.invoicenumber,
        isactive: req.body.isactive
    })
        .then(cart => {
            res.status(201).json(cart)
        }) .catch(err => {
            res.status(422).json("Tidak bisa membuat pesanan")
        })
})

//PUT
app.put('/carts/:id', (req, res) => {
    Cart.update({
        itemname: req.body.itemname,
        price: req.body.price,
        quantity: req.body.quantity,
        type: req.body.type,
        invoicenumber: req.body.invoicenumber,
        isactive: req.body.isactive
    }, {
        where: { id: req.params.id }
    })
        .then(cart => {
            res.status(201).json(cart)
    })  .catch(err => {
            res.status(422).json("Tidak bisa mengubah pesanan")
    })
})

//DELETE 
app.delete('/carts/:id', (req, res) => {
    Cart.destroy({
        where: { id: req.params.id }
    })
        .then(cart => {
            res.sendStatus(204)
        }) .catch(err => {
            res.status(422).json("Tidak bisa menghapus pesanan")
        })
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });