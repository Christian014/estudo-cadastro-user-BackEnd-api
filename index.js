const create = require("./src/controller/userController");
const express = require("express");
const app = express();
const PORT = 3000;

const cors = require("cors")

app.use(express.json());
app.use(cors())

app.listen(PORT, () => {
    console.log('O servidor está rodando na porta 3000')
})

//routes

app.get("/", (req, res) => {
    res.send(`api is running on Port: ${PORT}`)
});

app.post("/users", create);


