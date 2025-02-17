import pool from './conexao';

export async function cadastro(nome, email, telefone){
    const conexao = await pool.getConnection();

    const resposta = await conexao.query('INSERT INTO cadastro(nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
    console.log(resposta);
    conexao.release();
}