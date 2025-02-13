// Função que calcula a área de um círculo
function calcularAreaCirculo(raio) {
    // Definimos a constante PI usando a propriedade Math.PI
    const PI = Math.PI;
    // Calculamos a área e retornamos o resultado
    return PI * Math.pow(raio, 2);
  }
  
  const raio = 5;
  // calcularAreaCirculo passando o valor do raio e armazenamos o resultado na variável 'area'
  const area = calcularAreaCirculo(raio);
  // Imprimimos a área calculada no console, formatada com duas casas decimais
  console.log(`A área do círculo com raio ${raio} é ${area.toFixed(2)}.`);
  

  // calcula a soma de dois números
function calcularSoma(num1, num2) {
    return num1 + num2;
  }
  
  // função para calcular a soma de dois números
  const numero1 = 10;
  const numero2 = 5;
  const soma = calcularSoma(numero1, numero2);
  // Imprimimos a soma
  console.log(`A soma de ${numero1} e ${numero2} é ${soma}.`);
  