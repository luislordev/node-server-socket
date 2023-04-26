const { io } = require('../index')
// Sockets message
io.on('connection', client => {
    console.log('Client connected');

    client.on('disconnect', () => {
        console.log('Client disconnected');
    })

    client.on('test-message', data => {
        console.log("🚀 ~ file: index.js:21 ~ data:", data)

        io.emit('test-message', { admin: 'Hi 👋🏼' })
    })
})
