const express = require('express');
const router = express.Router();

const travellerRoutes = require('./travellerController');

router.get('/', (req, res) => {
    res.send("WELCOME TO THE HOMEPAGE");
});

router.use('/api/travellers', travellerRoutes);

module.exports = router;