const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
    res.render('movies', {movies: ['drama', 'romance']})
});

router.get('/products', (req, res) => {
    res.render('products', {products: ['bluetooth keebs', 'usb fan']})
});

module.exports = router;