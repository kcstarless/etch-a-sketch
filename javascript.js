let gridSize = 50; //default grid size.
let draw = false;
let reSize = false;

let gridbox = document.querySelector(".gridbox");

canvas(gridSize);

// Creates gridboxes of div based on default gridsize.
function canvas(gridSize){
    for (let i = 1; i <= (gridSize * gridSize); i++) {
        let div = document.createElement("div");
        div.className = "box";
        div.style.width = "calc(100% / " + gridSize + ")";
        div.style.height = "calc(100% / " + gridSize + ")";
        // div.textContent = i;
        gridbox.appendChild(div);
    }
}

function removeCanvas(){
    while (gridbox.firstChild){
        gridbox.removeChild(gridbox.firstChild);
    }
}

// Click on canvas to draw or stop drawing.
gridbox.addEventListener("click", () => {draw = !draw});

// Draws mouse movement if draw is true.
gridbox.addEventListener("mouseover", (event) => {
    // let box = document.querySelector(".box");
    if (draw === true) {
        if (event.target.className === "box") {
            event.target.style.backgroundColor = "black";
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
