var Express = require("express");
const cors = require('cors');
var app = Express();

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.listen(80, () => {
    console.log("started listening");
});

const items = [
    { id: "002415", somme: "1500", date: "10-03-2024", heure: "22:43" },
    {
        id: "001526",
        somme: "1200",
        date: "12-03-2024",
        heure: "12:03",
    },
];

const name = { nom: "ABAOUB Walid", id: "00214", solde: "30500" };

app.get("/solde", (request, response) => {
    response.json(name);
});

app.get("/historique", (request, response) => {
    response.json(items);
});

app.post("/envoi", (request, response) => {
    const id = request.body[0];
    const somme = request.body[1];
    console.log(request.body[0]);
    response.json("envoi validé");
});
