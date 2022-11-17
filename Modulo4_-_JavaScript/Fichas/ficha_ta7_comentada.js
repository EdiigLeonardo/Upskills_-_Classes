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


//Ex1
function listarAlunos(lista) {
    let alunos  = ''
    //declarei a variavel alunos nulo para poder utilizar dentro do forEach senão iria dar erro
    lista.forEach(function(elementoDalista){
        let calcIdade = 2022 - elementoDalista.ano_nascimento;
        alunos += "O aluno " + elementoDalista.nome + " " + elementoDalista.apelido + "com " + calcIdade + " anos chegou!!!" + "\n"
        //aqui estou a concatenar os valores da lista de acordo a ordem pedida do professor, sendo que "\n" é para dar outra linha.
        //tente testar sem o "\n" para perceberes.
    })
    return alunos
}

console.log(listarAlunos(alunos))

//Ex2
function calcIdadeFunction(elementoDeUmObjecto){
    return 2022 - elementoDeUmObjecto.ano_nascimento;
}
function alunosNovos(lista) {
    let alunos = ''
    let listaDeAlunos = lista.filter(element=>(
        calcIdadeFunction(element))<25)
    //O filter devolve uma lista nova de acordo ha alguma condição. Nesse caso é equivalente ao seguinte algoritmo:
    /* 1 - Filtra os elementos da listaDeInput dada como parametro da função, tais que os elementos tenham idade menor que 25
       2 - Adicione a uma nova lista listaDeAlunos.
       Repare que aqui podemos fazer:
       return ListaDe alunos
       e iriamos retornar uma lista ou fazemos um forEach para podermos retornar uma string.
       mas vamos retornar a lista para simplificar.
     */
    return listaDeAlunos
}

console.log("Alunos Novos:", alunosNovos(alunos));
//repare que a função alunosNovos recebe o objecto alunos definido lá encima ao invés de lista definido na função;
//Isso é porque a variável lista não é conhecida fora da função e segundo, porque é um paramêtro dela.
//Já o Alunos é uma variável conhecida dentro desse documento excepto dentro das funções;

function separaFrases(frase){
    frase = frase.split(" ");
    //Aqui reescrevi o parametro frase porque preciso que ele seja uma lista e não uma string
    //sendo assim essa frase será separa por espaços por ex.: 'água fresca' devolverá ["água","fresca"]
    let fraseDois = '';
    frase.forEach((palavra)=>{
        //O forEach é um for sendo assiim não retorna nada, logo não precisamos de declarar uma variável para recebé-la
        if(palavra.length > 3){
            palavra = palavra.toUpperCase();
            //repare que o palavra é um elemento da lista. sendo assim, naquele exemplo acima pode ser o "água" ou o "fresca"
            //Aqui estamos a verificar algo do genero se "água".length>4 faça ficar "ÁGUA" para o primeiro caso do nosso exemplo.
            //No segundo caso irá verificar o "fresca".
        }
        fraseDois += palavra + ' '
        //concatenamos tudo fora do if para incluir também as palavras que não se verifiquem
    })
    return fraseDois
}

console.log(separaFrases("uma frase com letras maiúsculas"))