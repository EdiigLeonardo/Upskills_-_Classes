function palavrasMaiusculas(frase) {
    let palavras = frase.split(" ")
    let palavras_modificadas = palavras.map(function (palavra) {
        if (palavra.length > 4)
            return palavra.toUpperCase();
        return palavra;
    })
    return palavras_modificadas.join(" ");
}

function palavrasMaiusculas2(frase) {
    let palavras = frase.split(" ");
    let palavras_modificadas = [];
    palavras.forEach(function (palavra) {
        if (palavra.length > 4)
            palavras_modificadas.push(palavra.toUpperCase());
        else
            palavras_modificadas.push(palavra);
    });
    return palavras_modificadas.join(" ")
}

let lista_frases = [
    "isto é uma frase com algumas palavras curtas e outras maiores",
    "isto é outra frase"
]

lista_frases.forEach(function (elemento) {
    console.log(palavrasMaiusculas(elemento));
})