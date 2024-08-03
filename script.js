var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;

function delay() {
  character.classList.remove("animate");
}
function hit() {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    alert("verloren");
    block.style.animation = "none";
  }
  else {
    ++score;
    document.getElementById("score").innerHTML = Math.floor(score / 100);
  }
}
function jump() {

  character.classList.add("animate");

  setTimeout(delay, 500);
}

var checkDead = setInterval(hit, 10);
