import express from "express";
import routes from "./src/routes/usuarioRoutes.js";

const app = express();
routes(app);

app.listen(process.env.PORT, () => {
  console.log("Server inicializado");
});
