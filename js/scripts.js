let square = document.getElementsByClassName("glitch");
let time;

square.addEventListener("animationiteration", duration);

function duration() {
  time = Math.random() + 1;
  square.style.setProperty("--animation-time", time + "s");
  console.log(time);
}
