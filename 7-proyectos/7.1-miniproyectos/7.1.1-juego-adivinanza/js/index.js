// Obtener elementos HTML después de que se cargue el DOM
document.addEventListener("DOMContentLoaded", function(){
    let guessInput = document.getElementById("guess");
    let submitButton = document.getElementById("submit");
    let feedbackText = document.getElementById("feedback");
    let playAgainButton = document.getElementById("playAgain");

    // Generar número aleatorio entre 1 y 100 al iniciar un juego nuevo
    let numberToGuess = generateNumberToGuess();

    // Definir la función que compara la respuesta del usuario con el número ingresado
    function checkGuess(){
        let userGuess = Number(guessInput.value);
        if (userGuess === numberToGuess){
            feedbackText.textContent = "Muy bien, ¡Ganaste!";
            submitButton.disabled = true;
            playAgainButton.style.display = "block";
        }else if(userGuess > numberToGuess){
            feedbackText.textContent = "Demasiado alto, intenta de nuevo.";
        }else{
            feedbackText.textContent = "Demasiado bajo, intenta de nuevo.";
        }
    };
    
    function restart(){
        numberToGuess = generateNumberToGuess();
        guessInput.value = "";
        feedbackText.textContent = "";
        submitButton.disabled = false;
        playAgainButton.style.display = "none";
    };

    function generateNumberToGuess(){
        let randomNumber = Math.floor(Math.random()*100)+1;
        return randomNumber;
    };

    // Agregar un evento al hacer click en el botón Adivinar
    submitButton.addEventListener("click", checkGuess);

    // Agregar un evento al hacer click en el botón Reiniciar
    playAgainButton.addEventListener("click", restart);

    restart();
});

