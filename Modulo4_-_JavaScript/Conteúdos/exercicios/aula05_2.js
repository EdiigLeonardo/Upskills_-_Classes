let nomes = ["João", "Mary","Teresa","Joana","Sabo","Luffy","Joker"];
let sobreNomes = ["Silva", "Saint","Carvalho","D.","Garp","Sumol"];

function nomeAleatorio(nomes, sobreNomes){
    const NAMES_INDEX = Math.floor(Math.random() * nomes.length);
    const LAST_NAMES_INDEX = Math.floor(Math.random() * sobreNomes.length);

    return `${nomes[NAMES_INDEX]}` + ` ${sobreNomes[LAST_NAMES_INDEX]}`
}

/*for (let i=1; i<=100; i+=2) {
    console.log(i)
}*/

/*
contador = 0;
while(contador<100){
    console.log(contador)
    contador +=2;
}*/

function ePrimo(num){
    if(num<3){
        return true
    }
    for(let i=1; i<=num/2; i++){
        if(num%i === 0){
            return false
        }
    }
    return true
}


function isPrime(num){
    if(num<=3){
        return true
    }
    for(let i=2;i<num/2;i++){
        if(num % i === 0){
            console.log(i)
            return false;
        }
    }
    return true
}

console.log(ePrimo(13))