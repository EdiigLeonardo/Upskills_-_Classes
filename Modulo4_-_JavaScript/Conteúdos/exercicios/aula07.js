let alunos = [
    {
        nome: "Teresa",
        idade: 25
    },
    {
        nome: "Joana",
        idade: 22
    },
    {
        nome: "Pedro",
        idade: 24
    }
]

/*
for(let i=0; i<alunos.length;i++){
    console.log(alunos[i].nome + ' tem ' + alunos[i].idade + ' anos.')
}

for(let i=alunos.length-1; i>=0; i--){
    console.log(alunos[i].nome + ' tem ' + alunos[i].idade + ' anos.')
}*/

function multiplicaPorDois(n){
    return 2*n
}

function imprimeNVezes(n, func){
    for(let i=0; i < n ; i++){
        console.log(func(i))
    }
}

// imprimeNVezes(5,multiplicaPorDois)


function imprimeForEach(array){
    array.forEach((element)=>console.log(element.nome))
}

let alunosMaioresQue24 = alunos.filter((aluno)=>{
    return aluno.idade>=24
})



// imprimeForEach(alunos)
// console.log(alunosMaioresQue24)

let alunosDois = [
    {
        nome: "Teresa",
        apelido: "Andrade",
        idade: 28
    }, {
        nome: "Maria",
        apelido: "Ventura",
        idade: 23
    }, {
        nome: "João",
        apelido: "Pereira",
        idade: 25
    },
];

function geraApelidos(pessoas){
    return(pessoas.map((pessoa)=>(pessoa.nome + ' ' + pessoa.apelido)))
}

let mapIdades = (pessoas) =>{
    return pessoas.filter((element)=>{return element.idade>24}).map((pessoa)=>{
        return (pessoa.nome + ' '+ pessoa.apelido + ' ' + pessoa.idade)
    })
}

console.log(geraApelidos(alunosDois))
console.log(mapIdades(alunosDois))
