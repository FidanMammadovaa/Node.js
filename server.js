const express = require('express')
const cors = require('cors');
const app = express()

const HOST = 5000

app.use(cors())

let apartments = [
    { name: "Apartment 1", address: "Lenina Street, 123", rooms: 3, price: 100000, city: "Baku" },
    { name: "Apartment 2", address: "Victory Avenue, 45", rooms: 2, price: 80000, city: "Ganja" },
    { name: "Apartment 3", address: "Sovetskaya Street, 87", rooms: 1, price: 60000, city: "Sumqayit" },
    { name: "Apartment 4", address: "Peace Avenue, 21", rooms: 4, price: 120000, city: "Baku" },
    { name: "Apartment 5", address: "Gagarin Street, 5", rooms: 2, price: 85000, city: "Ganja" }
];

app.get('/apartments', (req, res) => {
    let query = req.query
    let newArr = apartments.filter((apartment) => apartment.city.toLowerCase() === query.city.toLowerCase())
    res.json(newArr)

})

app.listen(HOST, () => {
    console.log(HOST + 'works');
})