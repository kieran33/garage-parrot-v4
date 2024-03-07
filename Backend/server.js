const Express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");
const port = 3002;

const app = Express();
app.use(cors());

const connectionDB = "mongodb+srv://Kieran:Lavole03031998@app-js-fullstack.0xdqdu3.mongodb.net/?retryWrites=true&w=majority&appName=app-js-fullstack";

const databaseName = "garage";
let database;

app.listen(port, () => {
    MongoClient.connect(connectionDB, (error, client) => {
        database = client.db(databaseName);
        console.log("Mongo DB connection successful");
    })
});

/*
app.post('/CreateUser', (req, res) => {
    const { email, password } = req.body;

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function (err, hash) {

        if (err) {
            return res.status(500).send('Erreur lors du hashage')
        }

        const query = "INSERT INTO employes (email, password) VALUES (?, ?)";

        db.query(query, [email, hash], (err, result) => {
            if (err) {
                res.status(500).send('Erreur lors de la création de l\'employé');
            } else {
                console.log('Employé créer avec succès');
                res.status(201).send('Employé créer avec succès');
            }
        })
    })
});
*/

app.get("/api/get", (req, res) => {
    database.collection("garage-collection").find({}).toArray((error, result) => {
        res.send(result);
    })
});

/*
app.delete('/api/remove/:email', (req, res) => {
    const { email } = req.params
    const request = 'DELETE FROM employes WHERE email = ?'
    db.query(request, email, (error, result) => {
        if (error) {
            console.log(error)
        }
    })
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Je me connecte');

    db.query("SELECT * FROM employes WHERE email = ?", [email], (err, results) => {
        if (err) {
            res.status(500).send('Erreur dans la recherche du compte employé');
        } if (results.length === 0) {
            console.log('Utilisateur non trouvé');
            res.status(401).send('Utilisateur non trouvé');
        }

        const user = results[0];
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                res.status(200).json({ success: true, message: "connexion réussis" });
            } else {
                res.status(401).json({ success: false, message: "mot de passe incorrect" });
            }
        })
    })
});*/