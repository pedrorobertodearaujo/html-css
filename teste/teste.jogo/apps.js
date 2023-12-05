function checkGuess() {
    // Gera um número aleatório entre 1 e 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
  
    // Obtém o valor inserido pelo usuário
    const userGuess = parseInt(document.getElementById("guessInput").value);
  
    // Verifica se o palpite do usuário está correto
    if (userGuess === randomNumber) {
      document.getElementById("result").innerHTML = "Parabéns! Você acertou!";
    } else {
      document.getElementById("result").innerHTML = `Desculpe, o número correto era ${randomNumber}. Tente novamente.`;
    }
  }