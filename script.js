const container = document.querySelector(".container");
const colorChoices = document.querySelectorAll("button");
let rangeslider = document.getElementById("sliderRange");
let output = document.getElementById("demo");
let gridSize = rangeslider.value;
output.innerHTML = rangeslider.value + " X " + rangeslider.value;
let color = "black";

//slider input and event listener to change grid
rangeslider.addEventListener('mouseup', changeGrid);
rangeslider.oninput = function() {
    output.innerHTML = this.value + " X " + this.value;
    gridSize = this.value;
}

function createGrid(gridSize) {
    for(let i = 1; i <= gridSize * gridSize; i++) {
        let gridItem = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        gridItem.addEventListener("mouseover", setColor);
        gridItem.style.border = "1px solid black";
        container.appendChild(gridItem);
    }
}

function setColor() {
    switch(color) {
        case "black":
            this.style.backgroundColor = "black";
            break;
        case "white":
            this.style.backgroundColor = "white";
            break;
        case "rainbow":
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break; 
    }
}

function changeGrid() {
    // delete current grid
    let gridItems = container.querySelectorAll("div");
    gridItems.forEach((gridItem) => {
        gridItem.remove();
    });
    // create new grid with updated size
    createGrid(gridSize);
}

//change color based on button clicked
colorChoices.forEach((colorChoice) => {
    colorChoice.addEventListener('click', function() {
        if(colorChoice.id == "black-btn") {
          color = "black";
        } else if (colorChoice.id == "rgb-btn") {
          color = "rainbow";
        } else if (colorChoice.id == "eraser-btn") {
          color = "white";
        }
    });
});

createGrid(20);
