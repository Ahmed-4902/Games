// Letters
const letters = "abcdefghiklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// select Letters Container
let lettersContainer = document.querySelector(".letters");

// Gernerate Letters
lettersArray.forEach((letter) => {
   //create span
   let span = document.createElement("span");

   //create letter text node
   let theLetterText = document.createTextNode(letter);

   // Append The letter To span
   span.appendChild(theLetterText);

   // Add Class On span
   span.className = "letter-box";

   // Append span To The Letter Container
   lettersContainer.appendChild(span);
});
//*******************
// Object Of Words + Categories
const words = {
   programming: [
      "php",
      "javascript",
      "go",
      "scala",
      "fortran",
      "r",
      "mysql",
      "python",
   ],
   movies: [
      "Prestige",
      "Inception",
      "Parasite",
      "Interstellar",
      "Whiplash",
      "Memento",
      "Coco",
      "Up",
   ],
   pepole: [
      "Albert Einstein",
      "Hitchcock",
      "Alecander",
      "Cleopatra",
      "Mahmtma Ghandi",
   ],
   countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

// Get Random Property
let allkeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allkeys.length);
//Category
let randomPropName = allkeys[randomPropNumber];
// Category Words
let randomPropValue = words[randomPropName];

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// The Chosen Word
let randomValueNmae = randomPropValue[randomValueNumber];

// set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// **************

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueNmae);

// Create Spans Depened On Word
lettersAndSpace.forEach((letter) => {
   // Create Empty span
   let EmptySpan = document.createElement("span");

   if (letter === " ") {
      EmptySpan.className = "with-space";
   }
   lettersGuessContainer.appendChild(EmptySpan);
});

// ************
// Select guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// set Wrong Attempts
let wrongAttempts = 0;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking on letters
document.addEventListener("click", (e) => {
   // Set The Chose Status
   let theStatus = false;

   if (e.target.className === "letter-box") {
      e.target.classList.add("clicked");

      // Get Clicked Letter
      let theClickLetter = e.target.innerHTML.toLowerCase();

      // The Chosen Word
      let theChosenWord = Array.from(randomValueNmae.toLowerCase());

      theChosenWord.forEach((wordLetter, wordIndex) => {
         // If The Clicked Letter Equal To one Of The chosen word letter
         if (theClickLetter == wordLetter) {
            console.log(`Found At Index Number ${wordIndex}`);
            // set Status to Correct
            theStatus = true;

            // loop on all guess Spans
            guessSpans.forEach((span, spanIndex) => {
               if (wordIndex === spanIndex) {
                  span.innerHTML = theClickLetter;
               }
            });
         }
      });
      // Outside loop
      // if letter is wrong
      if (theStatus !== true) {
         // Increase The wrong attempts
         wrongAttempts++;
         // Add Class On the Draw Element
         theDraw.classList.add(`wrong-${wrongAttempts}`);

         if (wrongAttempts === 8) {
            endGame();

            lettersContainer.classList.add("finished")
         }

         //Play Fail Sound
         document.getElementById("fail").play();
      } else {
         document.getElementById("success").play();
      }
   }
});

// End Game Function 
function endGame() {
   // Create Popup Div 
   let div = document.createElement("div")

   // create Text
   let divText = document.createTextNode(`Game Over, The word is ${randomValueNmae}`)

   div.appendChild(divText)

   div.className = 'popup'

   document.body.appendChild(div)

}