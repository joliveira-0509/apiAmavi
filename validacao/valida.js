/* // validacao/validacao.js
export async function validarDados(nome, telefone, email) {
    const erros = [];

    // Verifica se o nome é obrigatório e tem pelo menos dois caracteres
    if (!nome || nome.length <= 2) {
        erros.push("O nome deve ter pelo menos dois caracteres");
    }

    // Verifica se o email tem um formato válido
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(email)) {
        erros.push("O email deve ter um formato válido email@provedor.com");
    }

    // Verifica se o telefone tem um formato válido (XX) XXXXX-XXXX
    const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!regexTelefone.test(telefone)) {
        erros.push("O telefone deve ter um formato válido (XX) XXXXX-XXXX");
    }

    return erros;
}
 */

function validarNome(nome){
    const regexNome = /^[a-zA-ZÀ-ÿ\S\-']+$/;

    const isvalid = nome.length >=2 && regexNome.test(nome);

    return isvalid;

}

function validarEmail(email){
    const regexEmail =/^[^\s@]+@[^\s@]+\.[^\s@]=$/;

    const isvalid = regexEmail.test(email);

    return isvalid;
}

export function validarDados(nome,email){
    const nomeValido = validarNome(nome);
    const emailValido = validarEmail(email);

    const usuarioValido = nomeValido && emailValido;

    if (usuarioValido) {
        return{status:true, mensagem:''}
    } else {
        return{status:false, mensagem:'nome ou email inválido'}
    }
}