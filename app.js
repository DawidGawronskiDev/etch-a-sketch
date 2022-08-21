let gridContainer = document.querySelector("#grid--container");
let pixel = document.createElement("div");

let gridContainerSize = 256;
let pixelSize = 16;

let hueInput = document.querySelector("#hueInput");
let saturationInput = document.querySelector("#saturationInput");
let lightnessInput = document.querySelector("#lightnessInput");
let currentColor = document.querySelector("#currentColor");

//draw only if mouse is clicked
let isClicked = false;
gridContainer.addEventListener("click", function () {
  isClicked = !isClicked;
});

//reset grid
function resetGrid() {
  hueInput.value = 1;
  saturationInput.value = 100;
  lightnessInput.value = 50;
  gridContainer.innerHTML = "";

  changeColor();
  createGrid();
}

let newColor = "red";
//change color, hue, saturation and lightness
function changeColor() {
  newColor =
    "hsl(" +
    hueInput.value +
    ", " +
    saturationInput.value +
    "%, " +
    lightnessInput.value +
    "%)";
  currentColor.style.background = newColor;
}

//change color of pixel
function changePixelColor(e) {
  if (isClicked) {
    e.target.style.background = newColor;
  }
}

//change number of pixel in one row
function changePixelSize() {
  let pixelSizeInput = document.querySelector("#pixelSizeInput");
  pixelSize = pixelSizeInput.value;
  resetGrid();
}

//turn on or turn off outline display
let outlineDisplayBoolean = true;
function outlineDisplay() {
  let pixels = document.querySelectorAll(".pixel");

  if (outlineDisplayBoolean == true) {
    pixels.forEach((pixel) => (pixel.style.outline = "none"));
    outlineDisplayBoolean = false;
  } else {
    pixels.forEach(
      (pixel) => (pixel.style.outline = "1px solid rgba(0, 0, 0, 0.2)")
    );
    outlineDisplayBoolean = true;
  }
}

//create grid
function createGrid() {
  for (let i = 0; i < pixelSize * pixelSize; i++) {
    gridContainer.style.width = gridContainerSize + "px";
    gridContainer.style.height = gridContainerSize + "px";
    pixel = document.createElement("div");
    pixel.style.width = gridContainerSize / pixelSize + "px";
    pixel.style.height = gridContainerSize / pixelSize + "px";
    pixel.classList.add("pixel");
    pixel.style.background = "rgba(0, 0, 0, 0.1)";

    pixel.addEventListener("mouseenter", changePixelColor);

    gridContainer.appendChild(pixel);
  }
}
createGrid();
window.addEventListener("keydown", resetGrid);
