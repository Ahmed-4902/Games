class Game {
   constructor(easyWords, normalWords, hardWords) {
      this.easyWords = easyWords;
      this.normalWords = normalWords;
      this.hardWords = hardWords;
      this.checker();
      this.getStorge();
   }
   checker() {
      switch (select.value) {
         case "easy":
            words = this.easyWords;
            length = words.length - 1;
            break;
         case "normal":
            words = this.normalWords;
            length = words.length - 1;
            break;
         case "hard":
            words = this.hardWords;
            length = words.length - 1;
      }

      timeLeftSpan.innerHTML = lvls[select.value];
      secondsSpan.innerHTML = lvls[select.value];
      lvlNameSpan.innerHTML = select.value;
      scoreTotal.innerHTML = words.length;
      this.check();
   }
   genWords() {
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
      this.startPlay();
   }
   startPlay() {
      words.length === length
         ? (timeLeftSpan.innerHTML = lvls[select.value] + 3)
         : (timeLeftSpan.innerHTML = lvls[select.value]);
      let start = setInterval(() => {
         timeLeftSpan.innerHTML--;
         if (timeLeftSpan.innerHTML === "0") {
            clearInterval(start);
            if (
               input.value.toLowerCase().trim() ===
               theWord.innerHTML.toLowerCase().trim()
            ) {
               scoreGot.innerHTML++;
               input.value = "";
               if (words.length > 0) {
                  this.genWords();
               } else {
                  let span = document.createElement("span");
                  span.className = "good";
                  let spanTxt = document.createTextNode("Congratz");
                  span.appendChild(spanTxt);
                  finishMessage.appendChild(span);
                  this.saveScore();
               }
            } else {
               let span = document.createElement("span");
               span.className = "bad";
               let spanTxt = document.createTextNode("Game Over");
               span.appendChild(spanTxt);
               finishMessage.appendChild(span);
               this.saveScore();
            }
         }
      }, 1000);
   }
   welcomeFun = function () {
      inputWelcome.addEventListener("keydown", function (event) {
         if (event.key === "Enter") {
            if (inputWelcome.value !== "") {
               welcome.remove();
               overlay.remove();
            }
         }
      });
      ok.onclick = function () {
         if (inputWelcome.value !== "") {
            welcome.remove();
            overlay.remove();
         }
      };
   };
   saveScore() {
      this.scoreData(inputWelcome.value, scoreGot.innerHTML);
      console.log(scoreGot.innerHTML);
   }
   scoreData(name, score) {
      scoreObj = {
         player: name,
         number: score,
         date: Date.now(),
      };
      console.log(scoreObj.player);
      console.log(scoreObj.number);
      console.log(scoreObj.date);
      arrOfScore.push(scoreObj);
      this.addStorge(arrOfScore);
      this.addToPage(arrOfScore);
   }
   addToPage(scores) {
      arrOfScore.forEach((score) => {
         // Create Div
         let div = document.createElement("div");
         div.setAttribute("data-id", scoreObj.date);
         div.className = "score";
         // Create name
         let nameSpan = document.createElement("span");
         nameSpan.className = "nameSpan";
         nameSpan.appendChild(document.createTextNode(scoreObj.player));
         div.appendChild(nameSpan);
         console.log(nameSpan);
         // Create Score Span
         let scoreSpanEle = document.createElement("span");
         scoreSpanEle.className = "scoreSpanEle";
         scoreSpanEle.appendChild(document.createTextNode(scoreObj.number));
         div.appendChild(scoreSpanEle);
         console.log(scoreSpanEle);

         scoreContainer.appendChild(div);
      });
   }
   addStorge(arr) {
      window.localStorage.setItem("score", JSON.stringify(arrOfScore));
   }
   getStorge() {
      let data = localStorage.getItem("score");
      if (data) {
         let score = JSON.parse(data);
         this.addToPage(arrOfScore);
      }
   }

   check() {
      if (localStorage.getItem("score")) {
         arrOfScore = JSON.parse(localStorage.getItem("score"));
      }
   }
}

// Catch Selectors
let select = document.querySelector("select");
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
let overlay = document.querySelector(".overlay");
let welcome = document.querySelector(".welcome");
let inputWelcome = document.querySelector("input");
let ok = document.querySelector(".welcome button");
let scoreContainer = document.querySelector(".score-container");

// Array of Words
let arrOfScore = [];
let scoreNumber = scoreGot.innerHTML;

let words;
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
];
const normalWords = [
   "balloon",
   "cutting",
   "evening",
   "chairman",
   "bleeding",
   "between",
   "believe",
   "besides",
];
const hardWords = [
   "programming",
   "javascript",
   "destructuring",
   "documentation",
   "dependencies",
];
const lvls = {
   easy: 5,
   normal: 3,
   hard: 2,
};
let scoreObj;
let length;

// Start
const game = new Game(easyWords, normalWords, hardWords);

//welcome.remove();
//overlay.remove();
game.welcomeFun();
startButton.onclick = function () {
   game.checker();
   this.style.display = "none";
   input.focus();
   game.genWords();
};
select.onchange = function () {
   game.checker();
};
input.onpaste = function () {
   return false;
};

/*
   Advices
   - Always Check The Console
   - Take Your Time To Name The Identifiers
   - DRY

   Steps To Create The Project
   [01] Create HTML Markup
   [02] Add Styling And Separate From Logic
   [03] Create The App Logic
   ---- [01] Add Levels
   ---- [02] Show Level And Seconds
   ---- [03] Add Array Of Words
   ---- [04] ِAdd Start Game Button
   ---- [05] Generate Upcoming Words
   ---- [06] Disable Copy Word And Paste Event + Focus On Input
   ---- [07] Start Play Function
   ---- [08] Start The Time And Count Score
   ---- [09] Add The Error And Success Messages
   [04] Your Trainings To Add Features
   ---- [01] Save Score To Local Storage With Date
   ---- [02] Choose Levels From Select Box               (Done)
   ---- [03] Choose Array Of Words For Every Level       (Done)
   ---- [04] Add 3 Seconds For The First Word            (Done)
*/
