const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3001;
const EmployeModel = require("./models/Employes")

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Kieran:Lavole03031998@app-js-fullstack.0xdqdu3.mongodb.net/garage");

app.listen(port, () => {
    console.log('server is running');
});

app.post("/createEmploye", (req, res) => {
    EmployeModel.create(req.body)
        .then(employes => res.json(employes))
        .catch(err => res.json(err))
});

app.get("/", (req, res) => {
    EmployeModel.find({})
        .then(employes => res.json(employes))
        .catch(err => res.json(err))
});

app.put('/updateEmploye', (req, res) => {
    EmployeModel.findByIdAndUpdate({
        email: req.body.email,
        password: req.body.password
    })
        .then(employes => res.json(employes))
        .catch(err => res.json(err))
});

app.delete('/deleteEmploye/:id', (req, res) => {
    const id = req.params.id;
    EmployeModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
});