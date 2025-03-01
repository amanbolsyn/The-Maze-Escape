function visualizeMaze(mazeArray, startPoint, finalPoint) {
  const container = document.getElementById("maze-container");

  // Clear the previous visualization
  container.innerHTML = "";

  // Set the grid size based on maze dimensions
  container.style.gridTemplateColumns = `repeat(${mazeArray[0].length}, 20px)`;

  // Loop through the maze array and create divs
  mazeArray.forEach((row, y) => {
    row.forEach((cell, x) => {
      const cellDiv = document.createElement("div");
      cellDiv.className = "cell";

      // Set class based on cell value
      switch (cell) {
        case 0:
          cellDiv.classList.add("path"); // Open path
          break;
        case 1:
          cellDiv.classList.add("wall"); // Wall
          break;
        case 2:
          cellDiv.classList.add("visited"); // Visited
          break;
        case 3:
          cellDiv.classList.add("path-found"); // Path found
          break;
        default:
          break;
      }

      // Set starting point
      if (x === startPoint[0] && y === startPoint[1]) {
        cellDiv.classList.add("start"); // Start point
      }
      // Set final point
      if (x === finalPoint[0] && y === finalPoint[1]) {
        cellDiv.classList.add("end"); //Final point
      }

      container.appendChild(cellDiv);
    });
  });
}

const startBtn = document.getElementById("find-path-btn");

startBtn.addEventListener("click", () => {
  // call visualizeMaze function here with your solution

  // let isGridValid = true; 


  mazeStr = document.getElementById("maze-textarea").value.trim()

  //error messages
  mazeGridError = document.getElementById("maze-error")
  mazeGridError.innerHTML = ""


  //checks for empry maze grid
  if (mazeStr === "") {
    mazeGridError.innerHTML = "Error: maze grid cannot be empty"
    return
  }

  //creates an array of rows 
  const maze1DArr = mazeStr.split("\n")

  for (let i = 0; i < maze1DArr.length; i++) {
    maze1DArr[i] = maze1DArr[i].trimEnd()
  }


  //hecks if columns and rows are the same size
  if (maze1DArr.length !== maze1DArr[0].length) {
    mazeGridError.innerHTML = "Error: columns and rows are not the same size"
    return
  }


  //checks if rows are the same size
  for (let i = 0; i < maze1DArr.length; i++) {
    if (maze1DArr[0].length !== maze1DArr[i].length) {
      mazeGridError.innerHTML = "Error: rows are not the same size"
      return
    }
  }


  // console.log(maze1DArr)
   let maze2DArr = []

   for(let row = 0; row<maze1DArr.length; row++){
    maze2DArr[row] = []; //first initalize each row individually
    for(let col=0; col<maze1DArr[0].length; col++){
         if(maze1DArr[row][col] !== "1" && maze1DArr[row][col] !== "0"){ //checks each element to 0 or 1
          mazeGridError.innerHTML = "Error: maze grid has to consist of 0's or 1's"
          return
         }
 
      //creating 2D array out of 1D array of strings
      maze2DArr[row].push(maze1DArr[row][col])
    }
   }


   console.log(maze2DArr)


});