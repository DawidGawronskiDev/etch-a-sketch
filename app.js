// size of container
let containerSize = 256;

//number of elements in a row
let elementSize = 64;

//default color
let colorPick = `hsl(120,100%,50%)`;

let container = document.querySelector("#container");
container.style.height = 256 + "px";
container.style.width = 256 + "px";

colorPick = "purple";
function changeColor(e) {
  e.target.style.background = colorPick;
}
function changeColorSample() {
  let colorInput = document.querySelector("#colorInput");
  colorPick = `hsl(` + colorInput.value + `, 100%, 50%)`;
  console.log(colorInput.value);
}

//create board
for (let i = 0; i < elementSize * elementSize; i++) {
  let content = document.createElement("div");
  content.style.width = Math.floor(containerSize / elementSize) + "px";
  content.style.height = Math.floor(containerSize / elementSize) + "px";
  content.style.background = "rgba(0%, 0%, 0%, .1)";
  container.appendChild(content);

  content.addEventListener("mouseenter", changeColor);
}
