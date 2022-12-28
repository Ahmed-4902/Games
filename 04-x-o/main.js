let log = console.log;
let turn = "x";
let allSquares = document.querySelectorAll(".square");
let title = document.querySelector(".title");
let squ = [];
let getIn = document.querySelector(".get-in");

// getIn.onclick = function () {
//    this.parentElement.remove();
// };

allSquares.forEach((ele) => {
   ele.onclick = function () {
      game(ele.id);
   };
});
function end(num1, num2, num3) {
   title.innerHTML = `${squ[num1]} Winner`;
   document.getElementById("item" + num1).style.background = "#000";
   document.getElementById("item" + num2).style.background = "#000";
   document.getElementById("item" + num3).style.background = "#000";
   setInterval(function () {
      title.innerHTML += ".";
   }, 1000);
   setTimeout(function () {
      location.reload();
   }, 4000);
}
function winner() {
   for (let i = 1; i < 10; i++) {
      squ[i] = document.getElementById("item" + i).innerHTML;
   }
   if (squ[1] == squ[2] && squ[2] == squ[3] && squ[1] != "") {
      end(1, 2, 3);
   } else if (squ[4] == squ[5] && squ[5] == squ[6] && squ[4] != "") {
      end(4, 5, 6);
   } else if (squ[7] == squ[8] && squ[8] == squ[9] && squ[8] != "") {
      end(7, 8, 9);
   } else if (squ[1] == squ[4] && squ[4] == squ[7] && squ[1] != "") {
      end(1, 4, 7);
   } else if (squ[2] == squ[5] && squ[5] == squ[8] && squ[8] != "") {
      end(2, 5, 8);
   } else if (squ[3] == squ[6] && squ[6] == squ[9] && squ[9] != "") {
      end(3, 6, 9);
   } else if (squ[1] == squ[5] && squ[5] == squ[9] && squ[9] != "") {
      end(1, 5, 9);
   } else if (squ[3] == squ[5] && squ[5] == squ[7] && squ[7] != "") {
      end(3, 5, 7);
   }
}
function game(id) {
   let element = document.getElementById(id);
   if (turn === "x" && element.innerHTML == "") {
      element.innerHTML = "X";
      turn = "o";
      title.innerHTML = "O";
   } else if (turn === "o" && element.innerHTML == "") {
      element.innerHTML = "O";
      turn = "x";
      title.innerHTML = "X";
   }
   winner();
}
