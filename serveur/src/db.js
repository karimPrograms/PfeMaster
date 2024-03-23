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

//show user info
async function getUserInfo (id, req, res){
    console.log("id is " + id);
    let sql = "SELECT Nom , Prenom, Solde FROM userinfo WHERE Iduser = ?";
    await db.query(sql, [id], async (err, results) => {
        console.log("results is " + results);
        if (results.length===0){res.status(401).send({ message: 'User not found' })}
        else{
            res.status(200).send(results);
        }
    });
}

//do transaction
async function doTransaction (req, res, id_source, id_dest, amount){
    var solde_src = 0;
    var solde_dst = 0;
    let sql = "SELECT solde FROM userinfo WHERE Iduser = ?";

    let getSolde = (id) => {
        return new Promise((resolve, reject) => {
            db.query(sql, [id], (err, results) => {
                if (err) {
                    reject(err);
                } else if (results.length === 0) {
                    reject('User not found');
                } else {
                    resolve(results[0].solde);
                }
            });
        });
    };

    solde_src = await getSolde(id_source);
    console.log("solde_src is " + solde_src);

    solde_dst = await getSolde(id_dest);
    console.log("solde_dst is " + solde_dst);

    if (solde_src<amount){res.status(401).send({ message: 'Insufficient funds' })}
    else{

        let sql1 = "UPDATE userinfo SET solde = ? WHERE Iduser = ?";

        await db.query(sql1, [solde_src-amount, id_source], async (err, results) => {
            if (err) throw err;
        });
        await db.query(sql1, [solde_dst+amount, id_dest], async (err, results) => {
            if (err) throw err;
        });

        console.log("money sent")

        let date = new Date();
        let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        let formatted_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        let sql2 = "Insert INTO histrory (Id_Source, Id_Distination, Montant, Date, heure) values (?, ?, ?, ?, ?)";
        await db.query(sql2, [id_source ,id_dest, amount, formatted_date, formatted_time], async (err, results) => {
            if (err) throw err;
        });
        res.status(200).send({ message: 'Transaction successful' });
    }
}

//show history
async function getHistory (req, res, id){
    let sql = "SELECT * FROM histrory WHERE Id_Source = ?";
    console.log(id)
    await db.query(sql, [id], async (err, results) => {
        if (results.length===0){res.status(401).send({ message: 'No history found' })}
        else{
            res.status(200).send(results);
        }
    });
}

module.exports = {connect, search, getUserInfo, doTransaction, getHistory}