let gridSize = 50; //default grid size.
let draw = false;
let randomColor = false;

let gridbox = document.querySelector(".gridbox");
let colorize = document.querySelector(".colorize");

canvas(gridSize);

// Creates gridboxes of div based on gridsize.
function canvas(gridSize){
    for (let i = 1; i <= (gridSize * gridSize); i++) {
        let div = document.createElement("div");
        div.className = "box";
        div.style.width = `${700 / gridSize}px`;
        div.style.height = `${700 / gridSize}px`;
        // div.textContent = i;
        gridbox.appendChild(div);
    }
}

// Reset canvas 
function removeCanvas(){
    while (gridbox.firstChild){
        gridbox.removeChild(gridbox.firstChild);
    }
}

function randomRGBA() {
    let o = Math.round, r = Math.random, s = 255;
    return "rgba(" + o(r()*s) + "," + o(r()*s)+ "," + o(r()*s) + "," + r().toFixed(1) + ")";
}
// Click on canvas to draw or stop drawing.
gridbox.addEventListener("click", () => {draw = !draw});
// Changes color to random color.
colorize.addEventListener("click", () => {randomColor = !randomColor});

// Draws mouse movement if draw is true.
gridbox.addEventListener("mouseover", (event) => {
    // let box = document.querySelector(".box")
    if (draw === true && randomColor === false) {
        if (event.target.className === "box") {
            event.target.style.backgroundColor = "black";
        }
    }
    if (draw === true && randomColor === true) {
        if (event.target.className === "box") {
            event.target.style.backgroundColor = randomRGBA();
        }
    }
})

// Slider to show current value.
let slider = document.querySelector(".slider");
let txtRange = document.querySelector(".txtrange");

txtRange.textContent = slider.value;

slider.oninput = function() {
    txtRange.textContent = this.value;
}

// Remove existing gridbox and replace with new gridsize.
slider.onchange = function () {
    removeCanvas();
    canvas(this.value);
}
