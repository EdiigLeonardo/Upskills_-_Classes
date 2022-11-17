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
]

//1. Dada uma lista de alunos (incluída no ficheiro), imprimir por cada aluno na consola uma mensagem de boas vindas

//exemplo:
// >> "O aluno Pedro Sousa com 36 anos chegou!"
// >> "O aluno Manuel Madeira com 31 anos chegou!"

function calcIdade(birthYear){
    return 2022 - birthYear
}

function listarAlunos(lista) {
    let alunos  = ''
    lista.forEach(function(element){
        alunos += '\n' + (`O aluno ${element.nome} ${element.apelido} com ${calcIdade(element.ano_nascimento)} anos chegou!!!`)
    })
    return alunos
}

console.log("Alunos:", listarAlunos(alunos));


//2. Repetir o exercício 1 mas apenas com a lista de alunos com menos de 25 anos.

function calcIdadeFunction(elementoDeUmObjecto){
    return 2022 - elementoDeUmObjecto.ano_nascimento;
}
function alunosNovos(lista) {
    let alunos = ''
    let listaDeAlunos = lista.filter(element=>(
        calcIdadeFunction(element))<25)
    listaDeAlunos.forEach((element) =>{
            alunos += element.nome + ' ' + element.apelido + ' de' + ' ' + calcIdadeFunction(element) + ' anos \n'})
    return alunos
}

console.log("Alunos Novos:", alunosNovos(alunos));


//3. Criar uma função que dada uma frase, coloca em letras maíusculas todas as palavras com mais de 4 caracteres

function separaFrases(frase){
    frase = frase.split(" ");
    let fraseDois = '';
    frase.forEach((palavra)=>{
        if(palavra.length >= 4){
            palavra = ' ' + palavra.toUpperCase();
        }
        fraseDois += palavra + ' '
    })
    return fraseDois.trim()
}

console.log(separaFrases("uma frase com letras maiúsculas"))
//exemplo:
// "uma frase com letras maiúsculas" -> "uma FRASE com LETRAS MAIÚSCULAS"
// "olá mundo" -> "olá MUNDO"


function isUpperCase(letra){
    let stillUp = false
    for(let i = 0; i<letra.length; i++){
        if(letra.charCodeAt(i) >=65 && letra.charCodeAt(i)<=90){
            stillUp = true
            continue
        }
        stillUp = false
    }
    return stillUp
}

//-With ASCII CODE-
function darEnfaseWithAscii(frase) {
    frase = frase.split(" ");
    let fraseDois = '';
    frase.forEach((palavra)=>{
        if(isUpperCase(palavra)){
            palavra = '<strong>' + palavra + '</strong>';
        }
        fraseDois += palavra + ' '
    })
    return fraseDois.trim()
}

function darEnfase(frase, indice){
    frase = frase.split(" ")
    let fraseDois = '';
    frase.forEach((palavra)=>{
        if(isUpperCase(palavra.length>3)){
            palavra = palavra.toUpperCase();
        }
        fraseDois += palavra + ' '
    })
    return fraseDois.trim()
}


// console.log(isUpperCase("MUNDO"))
console.log("Frase com enfase:", darEnfase("olá mundo"));
// console.log("Frase com enfase:", darEnfaseWithAscii("olá MUNDO"));


//Bónus: 4. Com base na lista de alunos, imprimir uma estrutura de HTML válida que contém uma div por cada aluno, com a sua informação.


function criarHTML(itens){
    let newDiv = `
    <div class="alunos">`
    itens.forEach((item)=>{
        newDiv += `
        <div class="aluno">
            <h3>${item.nome} ${item.apelido}</h3>
            <p>Nasceu em ${item.ano_nascimento}</p>
        </div>`
    })
    newDiv += `
    </div>`
    return newDiv
}
//Exemplo:
/*

*/


// console.log("HTML dos alunos:", criarHTML(alunos));

