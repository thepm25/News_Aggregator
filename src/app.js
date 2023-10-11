const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('express').Router();
const userApis = require("./routes/users");
const newsApis = require("./routes/news");
const preferencesApis = require("./routes/preferences")
const userValidations = require("./middleware/validator/userValidation");

const express = require("express");
const app = express();

app.use(cors());
app.use(routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3000;

app.post("/register", userValidations.validateUserBody, userApis.registerUser);
app.post("/login", userValidations.validateUserBody, userApis.login);

app.use("/", newsApis)
app.use("/", preferencesApis)
app.listen(PORT, (error) =>{
        if(!error)
            console.log("Server is Successfully Running and App is listening on port " + PORT);
        else
            console.log("Error occurred, server can't start", error);
    }
);