const express = require('express');
const app = express()
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/animals', (req, res) => {
    res.render('animals', {animals: ['sand crab', 'corny joke dog']})
});

app.get('/foods', (req, res) => {
    res.render('foods', {foods: ['fajitas', 'ramen']})
});

app.get('/movies', (req, res) => {
    res.render('movies', {movies: ['perfect blue', 'one piece: film red']})
});

app.get('/products', (req, res) => {
    res.render('products', {products: ['keebs', 'desk fan']})
});



app.listen(3000)