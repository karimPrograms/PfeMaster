const mysql = require('mysql')
const config = require('./config/config')

//const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//Create Connection:
var db = mysql.createConnection({
    host     : config.db.host,
    user     : config.db.user,
    password : config.db.password,
    database : config.db.database
  });


//Connect:
function connect(){
    db.connect((err)=>{
        if(err){
            throw err;
        }
        console.log("MySQL connected")
    });
}

//search for user
async function search(email, password,req,res) {
    let sql = "SELECT * FROM userlogin WHERE email = ? AND password = ?";
    await db.query(sql, [email, password], async (err, results) => {
        //console.log(results)
        if (results.length===0){res.status(401).send({ message: 'Email or Password is incorrect' })}
        else{
            const id = results[0].Id;
            const token = jwt.sign({ id }, config.jwt.JWT_SECRET);

            console.log("the token is " + token);

            const cookieOptions = {
                maxAge: 900000, // Expires in 15 minutes
                httpOnly: true, // Cookie is only accessible via HTTP(S)
                secure: false, // Cookie is only sent over HTTPS
                sameSite: 'strict' 
            }
            res.cookie('userSave', token, cookieOptions);
            res.status(200).send(cookie = {message:"ok",token, cookieOptions});
        }
    });
}

//check if user is logged in:
async function isLoggedIn(req, res) {
    //console.log(req.cookies.userSave)
    if (req.cookies.userSave) {
        try {
            // 1. Verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.userSave,
                config.jwt.JWT_SECRET
            );
            console.log(decoded);

            // 2. Check if the user still exist
            db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (err, results) => {
                console.log(results);
                if (!results) {
                    return false;
                }
                req.user = results[0];
                console.log(req.user)
                return true;
            });
        } catch (err) {
            console.log(err)
            return false;
        }
    } else {
        console.log("user not loggedin")
        return false;
    }
}

//loggout function:
function logout (req, res) {
    res.cookie('userSave', 'logout', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });
    res.status(200).redirect("/");
}

module.exports = {connect, search, isLoggedIn, logout}