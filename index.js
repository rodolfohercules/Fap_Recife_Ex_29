// 1 - Função tradicional.
function welcome() {
    console.log("Olá, seja bem vindo a está é função tradicional!");
}

// 2 - Função tradicional com retorno.
function sum(a, b) {
    return a + b;
}

// 3 - Arrow function com parâmetros e que retorne.
const multiplication = (a, b) => {
    return a * b;
}

// Agora, vamos usar essas funções de forma lógica:


welcome();

// Chamando a função tradicional com parâmetros e obtendo um retorno de valor
const resultSum = sum(5, 3);
console.log("A soma é:", resultSum);

// Chamando a arrow function com parâmetros e obtendo um retorno de valor
const resultMultiplication = multiplcation(4, 6);
console.log("A multiplicação é:", resultMultiplication);
