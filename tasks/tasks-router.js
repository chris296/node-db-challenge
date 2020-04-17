const express = require('express');

const tasks = require('./tasks-model');

const router = express.Router();

router.get('/tasks', (req, res) => {
    tasks.find()
    .then(tasks => {
        res.json(tasks);
    })
    .catch(err => {
        res.status(500).json({ message: 'failed to get tasks'})
    })
})

router.post('/tasks', (req, res) => {
    const taskData = req.body;

    tasks.add(taskData)
    .then(task => {
        res.status(201).json(task);
    })
    .catch(err => {
        res.status(500).json({message: 'failed to add task'})
    })
})

module.exports = router;