import conectarAoBanco from "../config/dbconfig.js";

let conexao;

async function iniciarConexao() {
  conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
}

iniciarConexao();

export async function pegarTodosLogins() {
  const db = conexao.db("treinologin");
  const colecao = db.collection("usuarios");
  return colecao.find().toArray();
}

export async function criarUsuario(novoUsuario) {
  const db = conexao.db("treinologin");
  const colecao = db.collection("usuarios");
  return colecao.insertOne(novoUsuario);
}

export async function deletarUmUsuario(id) {
  try {
    const db = conexao.db("treinologin");
    const colecao = db.collection("usuarios");
    const resultado = await colecao.deleteOne({ _id: new ObjectId(id) });
    return resultado.deletedCount > 0;
  } catch (error) {
    throw new Error(`Erro ao deletar usuário: ${error.message}`);
  }
}
