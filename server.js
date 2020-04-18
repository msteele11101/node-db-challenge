const express = require('express');

const ProjectsRouter = require('./projects/project-router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);

module.exports = server;