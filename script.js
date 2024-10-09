let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
const guessList = document.querySelector(".guesslist");
let numberGuesses = 0;

document.getElementById("btnGuess").addEventListener("click", (e) => {
  const guessText = document.querySelector(".guess-text");
  let guessNr = Number(document.getElementById("input-guess").value);

  guessText.textContent = guessNr;


  if (guessNr == randomNumber) {
    resultText = "IS CORRECT";
    let x = document.getElementById("btnrestart");
    x.style.display = "block";
    x = document.getElementById("btnGuess");
    x.style.display = "none";
  }
  if (guessNr < randomNumber) {
    resultText = "is to low";
  }
  if (guessNr > randomNumber) {
    resultText = "is to high";
  }
  
  const guessResult = document.querySelector(".guess-result");
  if (guessNr < 1 || guessNr > 100) {
    resultText = "Guess between 1-100";
  }
  else{
    addGuess(guessNr, resultText);
  }
  guessResult.textContent = resultText;
  document.querySelector(".input-guess").value = "";
  document.getElementById("input-guess").focus();

});

document.getElementById("btnrestart").addEventListener("click", (e) => {
  console.log("restart");
  restartPage();
});

document
  .getElementById("input-guess")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.getElementById("btnGuess").click();
    }
  });

function addGuess(nr, txt) {
  numberGuesses++;
  const guess = document.createElement("li");
  guess.classList.add("guesslist");
  const guessText = document.createElement("p");
  guessText.textContent = numberGuesses + ": " + nr + " " + txt;

  guess.appendChild(guessText);
  guessList.appendChild(guess);
}
function restartPage() {
  location.reload();
}
