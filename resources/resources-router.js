const express = require('express');

const resources = require('./resources-model');

const router = express.Router();

router.get('/resources', (req, res) => {
    resources.find()
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        res.status(500).json({ message: 'failed to get resources'})
    })
})

router.post('/resources', (req, res) => {
    const resourceData = req.body;

    resources.add(resourceData)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        res.status(500).json({message: 'failed to add resource'})
    })
})

module.exports = router;