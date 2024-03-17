const db = require('./db')

module.exports = (app) => {
    app.post('/login', async (req, res) => {
        db.search(req.body.email, req.body.password,req, res);
    });
    app.get('/isloggedin', async (req, res) => {
        db.isLoggedIn(req, res)
    });
    app.get('/logout', async (req, res) => {
        db.logout(req, res)
    });
};