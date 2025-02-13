function calcularAreaCirculo(raio) {
    const PI = Math.PI;
    return PI * Math.pow(raio, 2);
  }
  
  const raio = 5;
  const area = calcularAreaCirculo(raio);
  console.log(`A área do círculo com raio ${raio} é ${area.toFixed(2)}.`);
  