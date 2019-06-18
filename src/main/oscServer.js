const { Client, Server } = require('node-osc')

var server = new Server(3333, '0.0.0.0')

server.on('message', function (msg) {
  console.log(`OSC Message: ${msg}`)
  server.close()
})
