// size of container
let containerSize = 256;

//number of elements in a row
let elementSize = 8;

let container = document.querySelector("#container");
container.style.height = 256 + "px";
container.style.width = 256 + "px";

function changeColor(e) {
  e.target.style.background = "blue";
}

for (let i = 0; i < elementSize * elementSize; i++) {
  let content = document.createElement("div");
  content.style.width = Math.floor(containerSize / elementSize) + "px";
  content.style.height = Math.floor(containerSize / elementSize) + "px";
  content.style.background = "red";
  content.style.outline = "1px solid rgb(0% 0% 0% / .1)";

  content.addEventListener("mousedown", changeColor);

  container.appendChild(content);
}
