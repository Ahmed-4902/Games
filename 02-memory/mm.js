document.querySelector(".control-buttons span").onclick = function () {
  let yourName = prompt("What Your Name? ");

  console.log(yourName);
  if (yourName == null || yourName == "") {
    document.querySelector(".info-container .name").innerHTML = "Unknown";
  } else {
    document.querySelector(
      ".info-container .name"
    ).innerHTML = `Hello: ${yourName}`;
  }
  document.querySelector(".control-buttons").remove();
};

let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);
let orderRange = [...Array(blocks.length).keys()];
shuffle(orderRange);
console.log(orderRange);

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  block.addEventListener("click", function () {
    flipBlock(block);
  });
});

// Flip block Function
function flipBlock(slectedBlock) {
  slectedBlock.classList.add("is-flipped");
}

// Shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * i);
    [array[i], array[random]] = [array[random], array[i]];
  }
}
