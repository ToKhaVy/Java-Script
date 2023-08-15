"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉 Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

// Random Secret Number

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// let highScore = 0;

//When click Check! button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⚠️ No number!";
  }

  // When player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;

    if (score > Number(document.querySelector(".highscore").textContent)) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = score - 1;
    }
  }

  // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = score - 1;
  //   }
  // }

  // // When guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = score - 1;
  //   }
  // }
});

// When click Again! button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
