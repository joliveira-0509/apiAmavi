import express from "express";
import cors from "cors";
import pool from "./servicos/conexao.js";
import { cadastro } from "./servicos/cadastro.js";
import { validarDados } from "./validacao/valida.js"

const app = express();
app.use(cors());
app.use(express.json());

app.post("/usuarios", async (req, res) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;

    const erros = validarDados(nome, /* telefone, */ email);

    if (erros.status) {
        await erros(nome, email)
        return res.status(204).end
    } else {
        return res.status(400).send({ mensagem: usuarioValido.mensagem });
    }
});

app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor iniciado em:" + data);

    const conexao = await pool.getConnection();
    console.log(conexao.threadId);
    conexao.release();
});