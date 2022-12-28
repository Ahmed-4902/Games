let log = console.log;
// VARIABLES
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close-icon");
const rules = document.querySelector(".rules");
const gameChoiceArray = ["paper", "scissors", "rock"];
const gameContentElement = document.querySelector(".game-content");
const gameChoiceElements = document.querySelectorAll(".game-choice");
const gameChoiceImage = document.querySelector(
   ".game-choice.computer .image img"
);
const gameChoiceComputer = document.querySelector(".game-choice.computer");
const scoreNumberElement = document.querySelector(".score-content .number");
const resultTextElement = document.querySelector(".result .text");
const resultButton = document.querySelector(".result .button");
const countdownTextElement = document.querySelector(".countdownText");
const player = document.querySelector("lottie-player"); //animation

let countdown = 4;
let randomResult;

// FUNCTION
const showModalEvent = () => modal.classList.toggle("active");
const getRandomNumber = () => Math.floor(Math.random() * 3);

const showResult = (userChoice, computerChoice) => {
   const score = parseInt(scoreNumberElement.textContent);

   if (userChoice === computerChoice) {
      //draw condition
      resultTextElement.textContent = "Draw";
   } else if (
      (userChoice === gameChoiceArray[0] &&
         computerChoice === gameChoiceArray[1]) ||
      (userChoice === gameChoiceArray[1] &&
         computerChoice === gameChoiceArray[2]) ||
      (userChoice === gameChoiceArray[2] &&
         computerChoice === gameChoiceArray[0])
   ) {
      //lose condition
      resultTextElement.textContent = "You lose";
      gameContentElement.classList.add("lost");

      if (score > 0) {
         scoreNumberElement.textContent = score - 1;
      }
   } else {
      // win condition
      resultTextElement.textContent = "You Win";
      setTimeout(
         () =>
            player.load(
               "https://assets1.lottiefiles.com/datafiles/U1I3rWEyksM9cCH/data.json"
            ),
         900
      );
      scoreNumberElement.textContent = score + 1;
   }
};

const startCountdown = () => {
   countdownTextElement.textContent = countdown - 1; // add countdown number to the html
   countdown -= 1;

   if (countdown) {
      // Start The countdown until we reach 0
      setTimeout(() => startCountdown(), 600);
   } else {
      //select random choice and show it
      const gameChoiceActive = document.querySelector(".game-choice.active");
      const selectedChoice = gameChoiceActive.dataset.choice;
      randomResult = gameChoiceArray[getRandomNumber()];
      log(randomResult);

      showResult(selectedChoice, randomResult);
      setTimeout(() => gameContentElement.classList.add("reveal-result"), 500);

      countdownTextElement.textContent = "";
      gameChoiceComputer.classList.add(`${randomResult}`);
      gameChoiceImage.setAttribute("src", `./imgs/icon-${randomResult}.svg`);
      countdown = 4;
   }
};

const gameChoiceEvent = (event) => {
   gameContentElement.classList.add("active");
   event.target.classList.add("active");

   startCountdown();
};

const playAgainEvent = () => {
   const activeChoiceElement = document.querySelector(".game-choice.active");

   gameContentElement.classList.remove("reveal-result");
   gameChoiceComputer.classList.remove(`game-choice.${randomResult}`);
   gameChoiceImage.setAttribute("src", "");
   gameContentElement.classList.remove(
      "active",
      "lost"
   );
   activeChoiceElement.classList.remove("active");
};

// MODAL EVENTS
overlay.addEventListener("click", showModalEvent);
closeIcon.addEventListener("click", showModalEvent);
rules.addEventListener("click", showModalEvent);

// GAME CHOICES EVENTS
gameChoiceElements.forEach((item) =>
   item.addEventListener("click", gameChoiceEvent)
);
resultButton.addEventListener("click", playAgainEvent);
