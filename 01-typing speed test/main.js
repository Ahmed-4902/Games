// CATCH SELECTORS & ARRAYS
log = console.log;
const select = document.querySelector("select");
const startButton = document.querySelector(".start");
const lvlNameSpan = document.querySelector(".message .lvl");
const secondsSpan = document.querySelector(".message .seconds");
const theWord = document.querySelector(".the-word");
const upcomingWords = document.querySelector(".upcoming-words");
const input = document.querySelector(".input");
const timeLeftSpan = document.querySelector(".time span");
const scoreGot = document.querySelector(".score .got");
const scoreTotal = document.querySelector(".score .total");
const finishMessage = document.querySelector(".finish");
const overlay = document.querySelector(".overlay");
const welcome = document.querySelector(".welcome");
const inputWelcome = document.querySelector("input");
const welcomeButton = document.querySelector(".welcome button");
const scoreContainer = document.querySelector(".score-container");
const easyWords = [
   "abets",
   "abide",
   "abode",
   "aboard",
   "about",
   "above",
   "acids",
   "acted",
   "acrid",
   "actor",
   "adage",
   "clear",
   "car",
   "short",
   "please",
   "none",
];
const normalWords = [
   "Balloon ",
   "cutting ",
   "evening ",
   "chairman",
   "Bleeding",
   "between",
   "believe ",
   "besides",
   "template",
   "disarmed",
];
const hardWords = [
   "Programming",
   "Javascript",
   "Destructuring",
   "Documentation",
   "Dependencies",
   "establishment",
   "Businesswoman",
   "Businessman",
   "Engineering",
   "Bookkeeping",
   "Characteristics",
   "Congregational ",
   "conversation",
   "Endogenization",
   "Conditioner",
];
const levels = {
   easy: 5,
   normal: 3,
   hard: 2,
};
let dateFull;
let words;
let length;
let arrOfScore = [];

//START FUNCTIONS
function getStorage() {
   let data = localStorage.getItem("score");
   if (data) {
      let score = JSON.parse(data);
   }
}
function scoreToArr(name, score, lvl) {
   let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
   ];
   const data = {
      player: name,
      number: score,
      level: lvl,
      date: Date.now(),
      fullDate: `${months[new Date(Date.now()).getMonth()]} ${new Date(
         Date.now()
      ).getDate()} ${new Date(Date.now()).getFullYear()} -- ${new Date(
         Date.now()
      ).getHours()}:${new Date(Date.now()).getMinutes()}`,
   };
   //log(fullDate);
   arrOfScore.push(data);
   addToPage(arrOfScore);
   addStorage(arrOfScore);
}

const addToPage = (scores) => {
   clear();
   arrOfScore.forEach((score) => {
      // Create Div
      let div = document.createElement("div");
      div.setAttribute("data-id", score.date);
      div.className = "player";
      // Create name Player
      let namePlayer = document.createElement("p");
      namePlayer.appendChild(document.createTextNode(`${score.player}`));
      div.appendChild(namePlayer);
      // Create Div Info
      let infoDiv = document.createElement("div");
      infoDiv.className = "info";
      div.appendChild(infoDiv);
      // create Lvl span
      let levelSpan = document.createElement("span");
      levelSpan.className = "levelspan";
      levelSpan.appendChild(document.createTextNode(`Level: ${score.level}`));
      infoDiv.appendChild(levelSpan);
      // Create Date Span
      let dateSpan = document.createElement("span");
      dateSpan.className = "dateSpan";
      dateSpan.appendChild(document.createTextNode(`Date: ${score.fullDate}`));
      infoDiv.appendChild(dateSpan);
      // Create Score Span
      let scoreSpanEle = document.createElement("span");
      scoreSpanEle.className = "scoreSpanEle";
      scoreSpanEle.appendChild(
         document.createTextNode(`Score: ${score.number}`)
      );
      infoDiv.appendChild(scoreSpanEle);

      scoreContainer.appendChild(div);
   });
};

function addStorage(arr) {
   window.localStorage.setItem("score", JSON.stringify(arrOfScore));
}

function clear() {
   let scores = document.querySelectorAll(".score-container div");
   scores.forEach((score) => {
      score.remove();
   });
}

function startGame() {
   startButton.style.display = "none";
   // startButton.classList.add("hide-tag");
   input.focus();
   genWords();
   theWord.classList = " the-word";
   upcomingWords.style.display = "block";
}

function genWords() {
   let randomWord = words[Math.floor(Math.random() * words.length)];
   let wordIndex = words.indexOf(randomWord);
   words.splice(wordIndex, 1);
   theWord.innerHTML = randomWord;
   upcomingWords.innerHTML = "";
   for (let i = 0; i < words.length; i++) {
      let div = document.createElement("div");
      let txt = document.createTextNode(words[i]);
      div.appendChild(txt);
      upcomingWords.appendChild(div);
   }
   startPlay();
}

function startPlay() {
   words.length === length
      ? (timeLeftSpan.innerHTML = levels[select.value] + 3)
      : (timeLeftSpan.innerHTML = levels[select.value]);
   let start = setInterval(() => {
      timeLeftSpan.innerHTML--;
      if (timeLeftSpan.innerHTML === "0") {
         // Stop Timer
         clearInterval(start);
         // Compare Words
         if (
            input.value.toLowerCase().trim() ===
            theWord.innerHTML.toLowerCase().trim()
         ) {
            // Empty Input Field
            input.value = "";
            // Increase Score
            scoreGot.innerHTML++;
            if (words.length > 0) {
               // Call Generate Word Funtion
               genWords();
            } else {
               theWord.innerHTML = "Congratulation";
               theWord.classList = " the-word good";
               upcomingWords.style.display = "none";
               input.style.display = "none";
               scoreToArr(inputWelcome.value, scoreGot.innerHTML, select.value);
            }
         } else {
            theWord.innerHTML = "game Over";
            theWord.classList = " the-word bad";
            upcomingWords.style.display = "none";
            input.style.display = "none";
            scoreToArr(inputWelcome.value, scoreGot.innerHTML, select.value);
         }
      }
   }, 1000);
}

function checker() {
   switch (select.value) {
      case "easy":
         words = easyWords;
         break;
      case "normal":
         words = normalWords;
         break;
      case "hard":
         words = hardWords;
         break;
   }
   length = words.length - 1;
   lvlNameSpan.innerHTML = select.value;
   secondsSpan.innerHTML = levels[select.value];
   timeLeftSpan.innerHTML = levels[select.value];
   select.onchange = checker;
   scoreTotal.innerHTML = words.length;
}

const welcomeProg = (e) => {
   if (inputWelcome.value !== "") {
      welcome.remove();
      overlay.classList.add("hide-tag")
   }
};

const showLastScore = () => {
   scoreContainer.classList.toggle("hide-tag");
   overlay.classList.toggle("hide-tag")
};

//START EVENTS
checker();

window.addEventListener("load", addToPage);

welcomeButton.addEventListener("click", welcomeProg);
inputWelcome.addEventListener("keydown", (e) => {
   e.key === "Enter" ? welcomeProg() : false;
});

if (localStorage.getItem("score")) {
   arrOfScore = JSON.parse(localStorage.getItem("score"));
}

input.onpaste = function () {
   return false;
};

startButton.onclick = function () {
   startGame();
};

document.querySelector(".show-score").addEventListener("click", showLastScore);
overlay.addEventListener("click", showLastScore);
