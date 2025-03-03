function CheckMazeGrid() {

    //getting value from textarea and triming it 
    let mazeStr = document.getElementById("maze-textarea").value.trim()
    let mazeGridError = document.getElementById("maze-error")
    mazeGridError.innerHTML = ""


    //checks for empry maze grid
    if (mazeStr === "") {
        mazeGridError.innerHTML = "Maze grid cannot be empty"
        return
    }

    //splits maze string by "\n" and creates an array of rows 
    const maze1DArr = mazeStr.split("\n")

    //trims the end of each row in maze grid
    for (let row = 0; row < maze1DArr.length; row++) {
        maze1DArr[row] = maze1DArr[row].trimEnd()
    }


    //checks if rows in the maze are the same size
    for (let row = 0; row < maze1DArr.length; row++) {
        if (maze1DArr[0].length !== maze1DArr[row].length) {
            mazeGridError.innerHTML = "Rows are not the same size"
            return
        }
    }

    //checks maze size. Min:2 Max:45
    if (maze1DArr[0].length < 2 || maze1DArr[0].length > 45) {
        mazeGridError.innerHTML = "Maze grid can be from 2 to 40 in blocks in size"
        return
    }

      //checks maze size. Min:2 Max:45
      if (maze1DArr.length < 2 || maze1DArr.length > 45) {
        mazeGridError.innerHTML = "Maze grid can be from 2 to 40 in blocks in size"
        return
    }

//checks each element to 0 or 1
    for (let row = 0; row < maze1DArr.length; row++) {
        for (let col = 0; col < maze1DArr[0].length; col++) {
            if (maze1DArr[row][col] !== "1" && maze1DArr[row][col] !== "0") { 
                mazeGridError.innerHTML = "Maze grid has to consist of 0's or 1's"
                return
            } 
        }
    }

 
    let maze2DArr = []
    
    //converts 1D array to 2D array 
    for (let row = 0; row < maze1DArr.length; row++) {
        maze2DArr[row] = []; //first initalize each row individually
        for (let col = 0; col < maze1DArr[0].length; col++) {
            //creating 2D array out of 1D array of strings
            maze2DArr[row].push(Number(maze1DArr[row][col]))
        }
    }

    return maze2DArr
}



export { CheckMazeGrid };