<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teste JavaScript</title>
</head>
<body>

<h1>Teste JavaScript</h1>

<script>
  // Função para calcular o quadrado de um número
  function calcularQuadrado(numero) {
    return numero * numero;
  }

  // Array para armazenar números
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Loop para iterar sobre os números e realizar operações
  for (let i = 0; i < numeros.length; i++) {
    const numeroAtual = numeros[i];
    
    // Calcular o quadrado
    const quadrado = calcularQuadrado(numeroAtual);

    // Exibir o resultado no console
    console.log(`O quadrado de ${numeroAtual} é ${quadrado}.`);

    // Verificar se o número é par ou ímpar
    if (numeroAtual % 2 === 0) {
      console.log(`${numeroAtual} é um número par.`);
    } else {
      console.log(`${numeroAtual} é um número ímpar.`);
    }

    // Adicionar uma quebra de linha para separar os resultados
    console.log('\n');
  }
</script>

</body>
</html>
