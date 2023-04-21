/*
    Principais pontos abordados nesse desafio:
        -Estrutura de dados com objetos;
        -Estrutura de repetição
        -Criação de funções
        -Operadores comparativos

*/

let students = [
    {
        name: "João",
        nota1: 8.5,
        nota2: 7.5
    },

    {
        name: "Maria",
        nota1: 9.0,
        nota2: 8.0
    },

    {
        name: "Pedro",
        nota1: 7.0,
        nota2: 6.5
    },

    {
        name: "Letícia",
        nota1: 6.5,
        nota2: 9.0
    },

    {
        name: "Lucas",
        nota1: 5.5,
        nota2: 7.0
    }
];

 for(let student of students) {
    calculateAverage(student.nota1, student.nota2, student.name)
}


function calculateAverage(nota1, nota2 , name) {
    let result = Number((nota1 + nota2) / 2).toFixed(1)
    
    if(result >= 7) {
        alert(`Parabéns, ${name}! Voce foi aprovado no concurso com a nota: ${result} `)
    } else {
        alert(`Não foi dessa vez ${name}! Sua nota foi: ${result} Tente novamente! `)
    }
}