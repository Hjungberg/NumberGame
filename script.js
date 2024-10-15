// Getting a random number
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); // For cheating when testing
const guessList = document.querySelector(".guesslist");
let numberGuesses = 0;

// Waiting for click on "Guess" button
document.getElementById("btnGuess").addEventListener("click", (e) => {
  const guessText = document.querySelector(".guess-text");
  let guessNr = Number(document.getElementById("input-guess").value);

  guessText.textContent = guessNr;

  // Checking guess and reporting result
  // Also showing and hiding restart/guess buttons if you guess correct
  if (guessNr == randomNumber) {
    resultText = "YOU GUESSED CORRECT!";
    let elementHide = document.getElementById("btnrestart"); //Show reset button
    elementHide.style.display = "block";
    elementHide = document.getElementById("btnGuess"); // Hide guess button
    elementHide.style.display = "none";
    elementHide = document.getElementById("input-guess"); //Hide input field
    elementHide.style.display = "none";
    elementHide.style.visibility = "hidden";
  }
  if (guessNr < randomNumber) {
    resultText = "is to low";
  }
  if (guessNr > randomNumber) {
    resultText = "is to high";
  }

  // Checking if the guess is between 1-100. If not dont add to guesslist
  const guessResult = document.querySelector(".guess-result");
  if (guessNr < 1 || guessNr > 100) {
    resultText = "Guess between 1-100"; //Guess outside range
  } else {
    addGuess(guessNr, resultText); // Add guess to list
  }
  guessResult.textContent = resultText;
  // Removing last guess from inputbox and setting focus on it
  document.querySelector(".input-guess").value = "";
  document.getElementById("input-guess").focus();
});

// Checking if we click the reset button and calling restartPage
document.getElementById("btnrestart").addEventListener("click", (e) => {
  console.log("restart");
  restartPage();
});

// Checking if we pressed "Enter" in the input box and generating a click on "guess" if we did.
document
  .getElementById("input-guess")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.getElementById("btnGuess").click();
    }
  });

// Adding your guess to the guesslist with guess number and result
function addGuess(nr, txt) {
  numberGuesses++;
  const guess = document.createElement("li");
  guess.classList.add("guesslist");
  const guessText = document.createElement("p");
  guessText.textContent = numberGuesses + ": " + nr + " " + txt;

  guess.appendChild(guessText);
  guessList.appendChild(guess);
}

// For resetting the page (the lazy way)
function restartPage() {
  // Removing guesslist
  let list = document.getElementById("guesslist");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  randomNumber = Math.floor(Math.random() * 100) + 1; // new random number
  console.log(randomNumber); // For cheating
  let elementHide = document.getElementById("btnrestart"); //Hide reset button
  elementHide.style.display = "none";
  elementHide = document.getElementById("btnGuess"); // Show guess button
  elementHide.style.display = "flex";
  elementHide = document.getElementById("input-guess"); // Show input field
  elementHide.style.display = "flex";
  elementHide.style.visibility = "visible";
  numberGuesses = 0;

  // resetting text fields
  document.querySelector(".input-guess").textContent = "0";
  document.getElementById("input-guess").focus();
  document.querySelector(".guess-result").textContent = "Guess Again ";
  document.querySelector(".guess-text").textContent = "0";
}
