const express = require('express');

const projects = require('./projects-model');

const router = express.Router();

router.get('/projects', (req, res) => {
    projects.find()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: 'failed to get projects'})
    })
})

router.post('/projects', (req, res) => {
    const projData = req.body;

    projects.add(projData)
    .then(proj => {
        res.status(201).json(proj);
    })
    .catch(err => {
        res.status(500).json({message: 'failed to add project'})
    })
})

module.exports = router;