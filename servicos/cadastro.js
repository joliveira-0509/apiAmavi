import pool from './conexao.js';

export async function cadastro(nome, telefone, email){
    const conexao = await pool.getConnection();

    const resposta = await conexao.query('INSERT INTO cadastro(nome, telefone, email) VALUES (?, ?, ?)', [nome, telefone ,email]);
    console.log(resposta);
    conexao.release();
}