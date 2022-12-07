const express = require('express');
const app = express()
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use('/loveit', require('./controllers/loveit'))
app.use('/leaveit', require('./controllers/leaveit'))


app.get('/', (req, res) => {
    res.render('home');
});

// app.get('/animals', (req, res) => {
//     res.render('/loveit/animals', {animals: ['sand crab', 'corny joke dog']})
// });

// app.get('/foods', (req, res) => {
//     res.render('/loveit/foods', {foods: ['fajitas', 'ramen']})
// });

// app.get('/movies', (req, res) => {
//     res.render('/leaveit/movies', {movies: ['perfect blue', 'one piece: film red']})
// });

// app.get('/products', (req, res) => {
//     res.render('/leaveit/products', {products: ['keebs', 'desk fan']})
// });



app.listen(3000)