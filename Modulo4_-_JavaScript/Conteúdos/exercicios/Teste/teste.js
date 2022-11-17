/*
for (let i=0; i<10; i++){
    if(i===5){
        i=8;
    }
    console.log(i)
}
*/

/*
let lista = [1,2,3]
console.log(lista.map(function(num){
    return num * 2;
}))*/
/*
function toUpperCaseVogais(frase){
    let vogais = ["a","e","i","o","u","á","é","í","ã","à","è","ê"];
    vogais.forEach((vogal)=>{
        vogais.push(vogal.toUpperCase())
    })
    let array_aux = ""
    frase = frase.split(" ");
    frase.map((palavra, index)=>{
        if(vogais.includes(palavra[0])){
            palavra = palavra.toUpperCase();
        }
        array_aux += palavra + " "
    })
    return array_aux.trim()
}

console.log(toUpperCaseVogais("Olá o meu nome é Isabel"))*/

/*function frasesInclusas(frase1, frase2){
    let contador_de_frases = 0;
    frase1 = frase1.split(" ")
    frase2 = frase2.split(" ")
    frase2.forEach((palavra)=>{
        if(frase1.includes(palavra)){
            contador_de_frases += 1;
        }
    })
    return contador_de_frases
}

console.log(frasesInclusas("eram estas as barbas do rei",
    "as alfaces do rei eram as melhores"))*/

function somaIndice(lista){
    let contador = 0
    lista.map((numero, index)=>{
        if(index %2===0){
            contador += numero
            return contador
        }
        contador *= numero
        return contador
    })
    return contador
}

console.log(somaIndice([ 3, 5, 7, 12 ]))
console.log(somaIndice([ 2, 5, 3 ]))

let alunos = [
    {
        nome: "Maria",
        apelido: "Andrade",
        ano_nascimento: 1990
    },
    {
        nome: "João",
        apelido: "Torres",
        ano_nascimento: 1988
    },
    {
        nome: "Sofia",
        apelido: "Malhoa",
        ano_nascimento: 1995
    },
    {
        nome: "Teresa",
        apelido: "Henriques",
        ano_nascimento: 1992
    },
    {
        nome: "José",
        apelido: "Bandeira",
        ano_nascimento: 2000
    },
    {
        nome: "Filipa",
        apelido: "Fontes",
        ano_nascimento: 1997
    },
    {
        nome: "Pedro",
        apelido: "Sousa",
        ano_nascimento: 1986
    },
    {
        nome: "Manuel",
        apelido: "Madeira",
        ano_nascimento: 1991
    }
];
/*function verifica_alunos_maiores_de_25(lista){
    let alunosMaiores = lista.filter(aluno=>aluno.ano_nascimento >= 1997);
    return alunosMaiores.length > 0;
}
console.table(verifica_alunos_maiores_de_25(alunos))*/
