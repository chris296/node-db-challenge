const express = require('express');

const projectRouter = require('./projects/projects-router');
const resourceRouter = require('./resources/resources-router');
const taskRouter = require('./tasks/tasks-router');

const server = express();

server.use(express.json());
server.use('/api', projectRouter, resourceRouter, taskRouter);

module.exports = server;