const express = require('express')
const gs = require('gradient-string')
const mc = require('./controllers/messages_controller')
const PORT = 3001


const app = express()
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', mc.read)
app.post('/api/messages', mc.create)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)




app.listen(PORT, () => console.log(gs.mind(`Livin' large on port: ${PORT}`)))