import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test/:nombre", (req, res) => {
    res.send("test "+ req.params.nombre);
});

app.listen(port, () => {
    console.log("http:localhost:3000");
})