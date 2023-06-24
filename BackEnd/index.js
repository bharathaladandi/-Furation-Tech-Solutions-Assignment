require("dotenv").config();
const express = require("express");
const cors = require('cors')
const connect = require("./config/db")

//Imports routes path

const app = express();


app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;

// Give query to route








// Connecting to DB
app.listen(PORT, async () => {
    try {
        await connect
        console.log("Connected to DB Successfully")

    } catch (err) {
        console.log("error while connecting to db", err);
    }
    console.log(`Listen on port ${PORT}`);
})

