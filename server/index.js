require('dotenv').config({ path: __dirname + '/../.env' }); 
const express = require('express'); 
const { SERVER_PORT } = process.env; 
const app = express(); 
app.use(express.json()); 
const mc = require('./messagesCtrl')

app.get('/api/messages', mc.getAllMessages); 

app.post('/api/message', mc.createMessage); 

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`); 
}); 
