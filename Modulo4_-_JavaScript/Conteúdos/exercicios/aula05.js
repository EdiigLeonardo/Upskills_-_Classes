function isIncluded(a,b,c){
    return a>=b && a<=c;
}

/*console.log(isIncluded(2,1,4))
console.log(isIncluded(12,5,10))*/

function sinal(num){
    if(num>0){
        return "positivo"
    }
    else if(num<0){
        return "negativo"
    }
    return "zero"
}

/*console.log(sinal(2))
console.log(sinal(0))*/

function xor(a,b){
    /*return (a || b) && !(b & a)*/
    return a !== b;
}

/*console.log(xor(true,true))
console.log(xor(false,true))
console.log(xor(true,false))
console.log(xor(false,false))*/

// Somar

function somar(a, b) {
    return a + b;
}

// console.log("somar(3, 4):", somar(3, 4));

// Quadrado

function square(x) {
    return x * x;
}

function power(number,potencial){
    return number**potencial;
}

// console.log("square(3):", square(3));

// 1. Subtrair

function subtrair(x,y){
    return x-y
}
// console.log("subtrair(8,9):", subtrair(8,9));

// 2. Área do retângulo

function areaRectangulo(lado, base){
    return lado*base
}
// console.log("areaRectangulo(5,6):", areaRectangulo(5,6));

// 3. Centímetros para polegada

function cmParaPolegadas(cm){
    return cm*0.393701
}
// console.log("cmToPol(10):", cmParaPolegadas(10));

// 4. Adicionar valor de IVA a um preço

function numeroComIva(valor){
    return (1.23)*valor
}
// console.log("numeroComIva(50):", numeroComIva(50));

// 5. Obter um preço sem o valor do IVA

function numeroSemIva(valor){
    return valor/(1.23)
}
// console.log("numeroSemIva(61.5):", numeroSemIva(61.5));


// 6. É numero par?
function ePar(numero){
    return numero%2 === 0
}
/*console.log("ePar(2):", ePar(2));
console.log("ePar(19):", ePar(19));*/

// 7. É positivo?

function ePositivo(numero){
    return numero>=0
}
/*console.log("ePositivo(0):", ePositivo(0));*/

// 8. Dividir

function divide(x,y){
    if (y===0){
        return 0
    }
    return x/y
}
/*console.log("divide(10,5):", divide(10,5));*/

// 9. Número de rodas

function numeroDeRodas(tipoDeVeiculo){
    if (tipoDeVeiculo === 'camiao' || tipoDeVeiculo === 'carro'){ //etc
        return 4
    }
    else if (tipoDeVeiculo === 'triciclo'){
        return 3
    }
    else if (tipoDeVeiculo === 'bicicleta' || tipoDeVeiculo === 'motocicleta'
        || tipoDeVeiculo === 'motorizada'){
        return 2
    }
    else if (tipoDeVeiculo === 'monociclo'){
        return 1
    }
    else{
        return false
    }
}
/*console.log("numeroDeRodas('camiao')", numeroDeRodas('camiao'));
console.log("numeroDeRodas('outro')", numeroDeRodas('outro'));
console.log("numeroDeRodas('monociclo')", numeroDeRodas('monociclo'));*/
// 10. Nota qualitativa

function qualitativeNote(nota){
    if(nota>0 && nota<=100){
        if (nota<30){
            return 'muito insuficiente'
        }
        else if (nota >= 90){
            return 'Excelente'
        }
        else if (nota >=80){
            return 'Muito Bom'
        }
        else if (nota >=70){
            return 'Bom'
        }
        else if (nota >=50){
            return 'Suficiente'
        }
        else if (nota >=30){
            return 'Insuficiente'
        }
    }
    else{
        return 'Nota inválida'
    }
}

/*console.log("qualitativeNote(70)", qualitativeNote(70));
console.log("qualitativeNote(120)", qualitativeNote(120));
console.log("qualitativeNote(40)", qualitativeNote(40));*/
// 11. Arredondar a duas décimas

function arredondar2(number){
    return Math.round(number * 100)/100
    /*
        number =+ (number.toFixed(2))
        return number
    */
}
// console.log("arredondar2(61.516013604): ", arredondar2(61.516013604));
// 12. Arredondar às décimas indicadas

function arredondarDecimais(number,decimais){
    return Math.round(number*decimais)/decimais;
    /*    number =+ (number.toFixed(decimais))
        return number*/
}
/*console.log("arredondarDecimais(61.516013604,1): ", arredondarDecimais(61.516013604,1));
console.log("arredondarDecimais(61.516013604,3): ", arredondarDecimais(61.516013604,3));
console.log("arredondarDecimais(61.516013604,5): ", arredondarDecimais(61.516013604,5));*/

// 13. Fórmula resolvente

function formulaResolvente(a,b,c){
    let determinante = square(b) - 4*a*c
    if (determinante > 0 && a !== 0){
        let x1 = (-b-(determinante)**(1/2))/(2*a);
        let x2 = (-b+(determinante)**(1/2))/(2*a);
        return [x1,x2]
    }
    else{
        if (a===0){
            return 'valores de a inválido, porque a=0'
        }
        else{
            return 'valores de a,b,c inválidos, porque determinante é negativo (b^2-4ac) < 0'
        }
    }
}

/*console.log("formulaResolvente(1,4,-21): ", formulaResolvente(1,4,-21))
console.log("formulaResolvente(1,4,-21): ", formulaResolvente(1,4,21))
console.log("formulaResolvente(1,4,-21): ", formulaResolvente(0,4,21))*/

function calculadora(a,b, operador){
    switch (operador){
        case "*":
            return a*b;
        case "+":
            return somar(a,b);
        case "/":
            return divide(a,b);
        case "-":
            return subtrair(a,b);
            break
        default:
            return 'Operação inválida'
    }
}

/*
console.log("5 * 6 = " + calculadora(5,6,"*")) // 5*6
console.log("3 + 6 = " + calculadora(3,6,"+")) // 3+6
console.log("3 ! 6 = " + calculadora(3,6,"!")) // 3+6
*/

/*let expression = "Hoje está calor"

console.log(expression.length);
console.log(expression.slice(0,10) + 'Frio');
console.log(expression.slice(0,10) + 'Frio' + 'E amanhã estará chuva');*/

let n = "961542045"
let indicativos = {
    portugal: "+351",
    angola: "+244",
    america: "+1",
    inglaterra: "+44"
}

function adicionarIndicativos2(numero, pais){
    return indicativos[pais.toLowerCase()] + numero
}

// console.log(adicionarIndicativos2(n, "portugal"))

let pessoas = {
    nome: "José",
    apelido: "Serro",
    idade: 28,
    altura: 2.5
}

pessoas.nomeCompleto = function(){
    return this.nome + ' ' + this.apelido
}

console.log(pessoas.nomeCompleto())
