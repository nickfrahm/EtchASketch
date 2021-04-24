//default grid to 16x16
let squares = 32;

//populate grid via squares
function populateGrid(numSquares) {
    const width = document.getElementById('grid').clientWidth;
    const height = document.getElementById('grid').clientWidth;
    const squareSize = (1/squares*100);

    console.log(`w: ${width}`, `h: ${height}`, `squareSize: ${squareSize}`);

    for (let j = 0; j < numSquares; j++) {
        console.log("row " + (j+1))
        for (let i = 0; i < numSquares; i++) {
            let div = document.createElement("div");
            div.style.width = squareSize + "%";
            div.className = "square square:after";
            div.style.border = "1px solid black";
            div.style.display = 'inline-block';
            div.style.padding = '0';
            div.style.margin = '0';
            document.getElementById("grid").appendChild(div);
        }
    }
}

//get input for squares change

//handle square hover
