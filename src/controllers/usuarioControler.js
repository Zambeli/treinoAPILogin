import {
  pegarTodosLogins,
  criarUsuario,
  deletarUmUsuario,
} from "../models/usuariosModels.js";

export async function listarUsuarios(req, res) {
  const usuarios = await pegarTodosLogins();
  res.status(200).json(usuarios);
}

export async function cadastrarUsuario(req, res) {
  try {
    const usuario = req.body;
    criarUsuario(usuario);

    res.status(201).json({ usuario });
  } catch (error) {
    console.error(error.messege);
    res.status(400).json({ messege: "Erro ao criar usuário" });
  }
}

export async function apagarUsuario(req, res) {
  try {
    const id = req.params.id;

    const deletado = await deletarUmUsuario(id);

    if (!deletado) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.status(201).json({ messege: "Usuario Deletado" });
  } catch (error) {
    console.error(error.messege);
    res.status(400).json({ messege: "Erro ao deletar usuário" });
  }
}
