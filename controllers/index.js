const express = require('express');
const router = express.Router();

const travellerRoutes = require('./travellerController');
const locationRoutes = require('./locationController');

router.get('/', (req, res) => {
    res.send("WELCOME TO THE HOMEPAGE");
});

router.use('/api/travellers', travellerRoutes);
router.use('/api/locations', locationRoutes)

module.exports = router;