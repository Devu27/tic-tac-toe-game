let boxes = document.querySelectorAll(".box");
playerO = true; //ensures two players
boxes.forEach(function (val) {
	val.addEventListener("click", function () {
		val.style.backgroundColor = "red";
		val.classList.add("box1");

		if (playerO == true) {
			val.innerText = "X";
			playerO = false;
			val.setAttribute("disabled", true);
		} else {
			val.innerText = "O";
			playerO = true;
			val.setAttribute("disabled", true);
		}
		getwinner();
	});
});
function getwinner() {
	if (
		boxes[0].innerText == boxes[1].innerText &&
		boxes[1].innerText == boxes[2].innerText &&
		boxes[0].innerText != ""
	) {
		winner();
		disableAllBoxes();
	}
	if (
		boxes[3].innerText == boxes[4].innerText &&
		boxes[4].innerText == boxes[5].innerText &&
		boxes[3].innerText != ""
	) {
		winner();
		disableAllBoxes();
	}
	if (
		boxes[6].innerText == boxes[7].innerText &&
		boxes[7].innerText == boxes[8].innerText &&
		boxes[6].innerText != ""
	) {
		winner();
		disableAllBoxes();
	}
	if (
		boxes[0].innerText == boxes[3].innerText &&
		boxes[3].innerText == boxes[6].innerText &&
		boxes[0].innerText != ""
	) {
		winner();
		disableAllBoxes();
	}
	if (
		boxes[1].innerText == boxes[4].innerText &&
		boxes[4].innerText == boxes[7].innerText &&
		boxes[1].innerText != ""
	) {
		winner();
		disableAllBoxes();
	}
	if (
		boxes[2].innerText == boxes[5].innerText &&
		boxes[5].innerText == boxes[8].innerText &&
		boxes[2].innerText != ""
	) {
		winner();
		disableAllBoxes();
	}
	if (
		boxes[0].innerText == boxes[4].innerText &&
		boxes[4].innerText == boxes[8].innerText &&
		boxes[0].innerText != ""
	) {
		winner();
		disableAllBoxes();
	}
	if (
		boxes[2].innerText == boxes[4].innerText &&
		boxes[4].innerText == boxes[6].innerText &&
		boxes[2].innerText != ""
	) {
		winner();
		disableAllBoxes();
	}
}
function disableAllBoxes() {
	boxes.forEach(function (val) {
		val.setAttribute("disabled", true);
	});
}
function winner() {
	let a = document.createElement("h1");
	a.innerText = "WINNER";
	document.body.append(a);
}
