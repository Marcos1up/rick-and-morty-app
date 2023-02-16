require("dotenv").config();
const mongoose = require("mongoose");
const server = require("./app.js");
const PORT = process.env.PORT || 3800;

const url = process.env.DB_CREDENTIAL;

mongoose.set("strictQuery", false); // para quitar una alerta de la consola

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("¡Conexión a MongoDB exitosa!");
        server.listen(PORT, () => {
            console.log("El servidor está corriendo en: ", PORT);
        });
    })
    .catch((err) => {
        console.log("Error al conectarse a MongoDB:", err);
    });
