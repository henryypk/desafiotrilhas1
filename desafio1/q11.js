let numero;

do {
    numero = prompt("Digite um número:");
    numero = parseInt(numero);

    if (numero !== 5) {
        alert("Você não digitou o número 5. Tente novamente!");
    }
    
} while (numero !== 5);

alert("Parabéns! Você digitou o número 5.");