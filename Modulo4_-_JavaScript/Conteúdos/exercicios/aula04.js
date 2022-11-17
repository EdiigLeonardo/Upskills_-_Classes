function mensagem(nome, idade){
    anoNascimento = 2022 - age
    return `O seu nome é ${nome} e nasceu em ${anoNascimento}`
}
/*
console.log(mensagem("josé",28))
console.log(mensagem("João",33))
console.log(mensagem("Pedro",44))
console.log(mensagem("John",44))
*/

function capitalizarPalavra(palavra){
    return palavra[0].toUpperCase() + palavra.slice(1)
}

/*console.log(capitalizarPalavra('teste'))
console.log(capitalizarPalavra('sombra'))*/

function converterIdade(pessoa){
    pessoa["idade"] = 2022 - pessoa.anoDeNascimento;
    delete pessoa.anoDeNascimento;
    return pessoa
}

let outraPessoa = {nome:"Francisco",
    anoDeNascimento: 1998}

let outraPessoa1 = {nome:"João",
    anoDeNascimento: 2020}

console.log(converterIdade(outraPessoa))
console.log(converterIdade(outraPessoa1))
