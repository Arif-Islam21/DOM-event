const makeBlue = document.getElementById("make-blue");
makeBlue.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

const makePurple = document.getElementById("make-purple");
makePurple.onclick = makePu;
function makePu() {
  document.body.style.backgroundColor = "purple";
}

// MAKE PICK
const cyanButton = document.getElementById("make-cyan");
cyanButton.addEventListener("click", function makecyan() {
  document.body.style.backgroundColor = "cyan";
});

const makeGreen = document.getElementById("make-green");
makeGreen.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});
