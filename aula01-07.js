// function soma(n1, n2) {
//     let res = n1 + n2;
//     console.log("a soma é igual a " + res);
// }

// soma(10, 20);
// soma(2, 7);

const prompt = require("prompt-sync")({ sigint: true });

function maiorNumeroPossivel(num) {
    return parseInt(
        num
            .split("")
            .sort((a, b) => b - a)
            .join(""),
        10
    );
}

const numero = prompt("Por favor, forneça um número: ");
const resultado = maiorNumeroPossivel(numero);
console.log("O maior número possível com os algarismos fornecidos é: " + resultado);
