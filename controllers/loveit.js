const express = require('express');
const router = express.Router();

router.get('/animals', (req, res) => {
    res.render('animals', {animals: ['sand crab', 'corny joke dog']})
});

router.get('/foods', (req, res) => {
    res.render('foods', {foods: ['fajitas', 'ramen']})
});

module.exports = router;