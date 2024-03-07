const mongoose = require("mongoose");

const EmployeSchema = new mongoose.Schema({
    email: String,
    password: String
});

const EmployeModel = mongoose.model("liste-employes", EmployeSchema);

module.exports = EmployeModel;