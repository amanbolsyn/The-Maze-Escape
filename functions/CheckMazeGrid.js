function CheckMazeGrid() {

    let mazeStr = document.getElementById("maze-textarea").value.trim()

    //error messages
    let mazeGridError = document.getElementById("maze-error")
    mazeGridError.innerHTML = ""


    //checks for empry maze grid
    if (mazeStr === "") {
        mazeGridError.innerHTML = "Maze grid cannot be empty"
        return
    }

    //creates an array of rows 
    const maze1DArr = mazeStr.split("\n")

    for (let i = 0; i < maze1DArr.length; i++) {
        maze1DArr[i] = maze1DArr[i].trimEnd()
    }


    //checks if rows are the same size
    for (let i = 0; i < maze1DArr.length; i++) {
        if (maze1DArr[0].length !== maze1DArr[i].length) {
            mazeGridError.innerHTML = "Rows are not the same size"
            return
        }
    }


    //checks maze size. Min:2 Max:45
    if (maze1DArr[0].length < 2 || maze1DArr[0].length > 45) {
        mazeGridError.innerHTML = "Maze grid can be from 2 to 45 in blocks in size"
        return
    }

      //checks maze size. Min:2 Max:45
      if (maze1DArr.length < 2 || maze1DArr.length > 45) {
        mazeGridError.innerHTML = "Maze grid can be from 2 to 45 in blocks in size"
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


    // console.log(maze1DArr)
    let maze2DArr = []

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