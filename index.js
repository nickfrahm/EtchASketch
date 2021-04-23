//default grid to 16x16
let squares = 4;

//populate grid via squares
function populateGrid(numSquares) {
    const width = document.getElementById('grid').clientWidth;
    const height = document.getElementById('grid').clientWidth;
    const squareWidth = width/numSquares;
    const squareHeight = height/numSquares;

    console.log(`w: ${width}`, `h: ${height}`, `sw: ${squareWidth}`, `sh: ${squareHeight}`);

    for (let j = 0; j < numSquares; j++) {
        console.log("row " + (j+1))
        for (let i = 0; i < numSquares; i++) {
            let div = document.createElement("div");
            div.style.width = (squareWidth - squares).toString() + "px";
            div.style.height = (squareHeight - squares).toString() + "px";
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
