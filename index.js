import express from "express";
import bodyParser from "body-parser";
import {sendNotification,startNotificationListener} from "./listener.mjs";

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test/:nombre", (req, res) => {
    res.send("test "+ req.params.nombre);
});

// Ruta para el endpoint POST
app.post('/', (req, res) => {
    //console.log(req.body)
    sendNotification(req.body);
    res.send("Peticion POST");
});

startNotificationListener();

app.listen(port, () => {
    console.log("http:localhost:3000");
})