import express from "express";
import {
  listarUsuarios,
  cadastrarUsuario,
  apagarUsuario,
} from "../controllers/usuarioControler.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/", listarUsuarios);
  app.post("/", cadastrarUsuario);
  app.delete("/delete/:id", apagarUsuario);
};

export default routes;
