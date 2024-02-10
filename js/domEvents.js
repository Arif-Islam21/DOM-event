const makeBlue = document.getElementById("make-blue");
makeBlue.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

const makePurple = document.getElementById("make-purple");
makePurple.onclick = makePu();
function makePu() {
  document.body.backgroundColor = "purple";
}
