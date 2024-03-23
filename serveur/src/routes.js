const db = require('./db')

module.exports = (app) => {
    app.post('/login', async (req, res) => {
        db.search(req.body.email, req.body.password,req, res);
    });
    app.post('/getUserInfo', async (req, res) => {
        db.getUserInfo(req.body.id, req, res)
    });
    app.post('/doTransaction', async (req, res) => {
        db.doTransaction(req, res, req.body.id, req.body.id_dest, req.body.amount)
    });
    app.post('/getHistory', async (req, res) => {
        db.getHistory(req, res, req.body.id)
    });
};