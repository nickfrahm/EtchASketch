//default grid to 16x16
let squares = 16;
window.onload = initializePage(); //

//populate grid via squares
function populateGrid(numSquares) {
  const width = document.getElementById("grid").clientWidth;
  const height = document.getElementById("grid").clientWidth;
  const squareSize = (1 / numSquares) * 100;

  //console.log(`w: ${width}`, `h: ${height}`, `squareSize: ${squareSize}`);

  for (let j = 0; j < numSquares; j++) {
    //console.log("row " + (j + 1));
    for (let i = 0; i < numSquares; i++) {
      let div = document.createElement("div");
      div.style.width = squareSize + "%";
      div.className = "square square:after";
      div.style.border = "1px solid black";
      div.style.display = "inline-block";
      div.style.padding = "0";
      div.style.margin = "0";
      document.getElementById("grid").appendChild(div);
      div.addEventListener("mouseover", () => {
        //console.log("hovering");
        div.style.backgroundColor = setRandomColor();
      });
    }
  }
}

//get input for squares change
const button = document.getElementById("change-btn");
console.log(button);
if (button !== null && button !== undefined) {
  button.onclick = function () {
    changeSize();
  };
}

function changeSize() {
  let sq = parseInt(window.prompt("Enter a number 1 to 50:", "16"));
  console.log(sq);
  try {
    if (sq === parseInt(sq) && sq <= 50 && sq >= 1) {
      console.log("populating grid");
      clearGrid();
      populateGrid(sq);
    } else {
      console.log("didn't make if");
    }
  } catch (err) {
    console.log(err);
    alert("Please enter a number 1 to 50.");
    sq = 16;
  }
}

//clear grid
function clearGrid() {
  console.log("clearing the grid");
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
}

//handle square hover
function setRandomColor() {
  const rand = () => {
    return Math.floor(Math.random() * 256);
  };
  const newBackgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
  //console.log(rand());
  return newBackgroundColor;
}

function initializePage() {
  populateGrid(squares);
}
