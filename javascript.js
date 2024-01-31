let gridSize = 10000;

let gridbox = document.querySelector(".gridbox");

for (let i = 1; i <= gridSize; i++) {
    let div = document.createElement("div");
    div.className = "box";
    // div.textContent = i;
    gridbox.appendChild(div);
}


gridbox.addEventListener("mouseover", (event) => {
    // let box = document.querySelector(".box");
    if (event.target.className === "box") {
        event.target.style.backgroundColor = "black";
    }
})
