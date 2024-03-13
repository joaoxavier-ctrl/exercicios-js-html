function livro(nome, ano, autor){
    const maiusculo = nome.toUpperCase();
    const anosDesdeLance = 2050 - ano;
    const frase = nome + ' por ' + autor;
    const objeto = {
        nome: maiusculo,
        anosDesdeLance,
        frase
    };
    return objeto;
}

const livroRetorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');

console.log(livroRetorno.frase );
