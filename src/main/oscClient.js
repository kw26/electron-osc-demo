const { Client } = require('node-osc')

const client = new Client('127.0.0.1', 3333)

process.on('message', (msg) => {
    console.log('Message from parent:', msg)

    client.send(msg, (err) => {
        if (err) console.error(err)
        // client.close()
    })
})

