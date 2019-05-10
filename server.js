const express = require('express');

const server = express();
server.use(express())

const hubsRouter = require('./hubs/hubs-router.js')

server.use(`/api/hubs`, hubsRouter)

server.get(`/`, (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome to Lambda Hubs API</p>
  `)
})

module.exports = server
