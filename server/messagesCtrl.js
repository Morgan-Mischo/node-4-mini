let allMessages = []

module.exports = {
    getAllMessages(req, res) {
        res.status(200).send(allMessages)
    }, 
    createMessage(req, res) {
        let { username, message } = req.body; 
        let newMessage = { username, message };
        allMessages.push(newMessage);
        res.status(200).send(allMessages);
    }
};