// size of container
let containerSize = 256;

//number of elements in a row
let elementSize = 6;

//default color
let colorPick = `hsl(120,100%,50%)`;

let container = document.querySelector("#container");
container.style.height = 256 + "px";
container.style.width = 256 + "px";

function newContent(e) {
  if (e.keyCode != 82) return;
  container.innerHTML = "";
  for (let i = 0; i < elementSize * elementSize; i++) {
    let content = document.createElement("div");
    content.style.width = containerSize / elementSize + "px";
    content.style.height = containerSize / elementSize + "px";
    content.style.background = "rgba(0%, 0%, 0%, .1)";
    container.appendChild(content);

    content.addEventListener("mouseenter", changeColor);
  }
}

colorPick = "purple";
function changeColor(e) {
  e.target.style.background = colorPick;
}

function changeColorSample() {
  let hueInput = document.querySelector("#hueInput");
  let saturationInput = document.querySelector("#saturationInput");
  let lightnessInput = document.querySelector("#lightnessInput");
  colorPick =
    `hsl(` +
    hueInput.value +
    `, ` +
    saturationInput.value +
    `%, ` +
    lightnessInput.value +
    `%)`;
  console.log(hueInput.value);
}

//create board
for (let i = 0; i < elementSize * elementSize; i++) {
  let content = document.createElement("div");
  content.style.width = containerSize / elementSize + "px";
  content.style.height = containerSize / elementSize + "px";
  content.style.background = "rgba(0%, 0%, 0%, .1)";
  container.appendChild(content);

  content.addEventListener("mouseenter", changeColor);
}

window.addEventListener("keydown", newContent);
