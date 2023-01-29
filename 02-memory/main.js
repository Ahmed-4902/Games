document.querySelector(".control-buttons span").onclick = function () {
	let yourName = prompt("What Your Name? ");

	if (yourName == null || yourName == "") {
		document.querySelector(".info-container .name span").innerHTML =
			"Unknown";
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

blocks.forEach((block, index) => {
	block.style.order = orderRange[index];
	block.addEventListener("click", function () {
		flipBlock(block);
	});
});

// Flip block Function
function flipBlock(slectedBlock) {
	// Add Class is-flipped
	slectedBlock.classList.add("is-flipped");

	// Collect all flipped card
	let allFlippedBlocks = blocks.filter((flippedblock) =>
		flippedblock.classList.contains("is-flipped")
	);

	// If There two selected blocks
	if (allFlippedBlocks.length === 2) {
		stopClicking();
		checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
	}
}

// STop Clicking function
function stopClicking() {
	// Add Class No Clicking on Main Container
	blocksContainer.classList.add("no-clicking");

	// Remove Class No Clicking on Main Container
	setTimeout(() => {
		blocksContainer.classList.remove("no-clicking");
	}, duration);
}

//Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {
	let triesElement = document.querySelector(".tries span");

	if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
		firstBlock.classList.remove("is-flipped");
		secondBlock.classList.remove("is-flipped");

		firstBlock.classList.add("has-match");
		secondBlock.classList.add("has-match");
		document.getElementById("success").play();
	} else {
		triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
		setTimeout(() => {
			firstBlock.classList.remove("is-flipped");
			secondBlock.classList.remove("is-flipped");
		}, duration);
		document.getElementById("fail2").play();
	}
}

// Shuffle function
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let random = Math.floor(Math.random() * i);
		[array[i], array[random]] = [array[random], array[i]];
	}
}
