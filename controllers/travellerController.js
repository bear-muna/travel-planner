const express = require('express');
const router = express.Router();
const { Traveller } = require('../models');

router.get('/', async (req, res) => {
    try {
        const travellers = await Traveller.findAll();
        if (travellers.length === 0) {
            return res.status(404).json({ msg: "No travellers in db" });
        }
        res.json(travellers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error occurred", error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const traveller = await Traveller.findByPk(req.params.id);
        if (!traveller) {
            res.status(404).json({ msg: "No traveller with id exists" });
        }
        res.json(traveller);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error occurred", error });
    }
});

router.post('/', async (req, res) => {
    try {

        const newTraveller = await Traveller.create({
            name: req.body.name,
            email: req.body.email
        });
        res.json(newTraveller);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error occurred", error });
    }
});

router.delete('/:id', async (req, res) => {
    try { 
        const delTraveller = await Traveller.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!delTraveller) {
            res.status(404).json({ msg: "No traveller with that id in database" });
        }
        res.json(delTraveller);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error occurred", error });
    }
})

module.exports = router;