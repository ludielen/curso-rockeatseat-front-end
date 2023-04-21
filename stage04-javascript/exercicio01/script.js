/*
    O que será abordado nesse desafio:
        -variaveis;
        -Operações matematicas
        -Operadores comparativos
        -Condicional

    Nesse desafio, você irá solicitar ao usuário que ele insira 2 números e, a partir daí, calcular:
     +
     -
     *
     /
     %    

     Verificar se a soma dos dois números é par ou impar.
     Verificar se os dois números inseridos são iguais ou diferentes.
*/

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
alert(`A soma dos dois números é: ${sum} `)

let sub = numberOne - numberTwo
alert(`A subtração dos dois números é: ${sub}`)

let multi = numberOne * numberTwo
alert(`A multiplicação dos dois números é: ${multi}`)

let div = numberOne / numberTwo
alert(`A divisão dos dois números é: ${div}`)

let restDiv = numberOne % numberTwo
alert(`O resto da divisão dos dois números é: ${restDiv}`)

if(sum % 2 === 0) {
    alert(`A soma dos dois numeros é par:  ${sum}`)
} else {
    alert(`A soma dos dois numeros é impar:  ${sum}`)
}

if(numberOne === numberTwo) {
    alert("Os números inseridos são iguais")
} else {
    alert("Os números inseridos são diferentes")
}
