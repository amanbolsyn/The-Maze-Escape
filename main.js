import { CheckMazeGrid } from "./functions/CheckMazeGrid.js"
import { CheckCordinates } from "./functions/CheckCordinates.js";
import { PathFinding } from "./functions/PathFinding.js"

const startBttn = document.getElementById("start-bttn");

startBttn.addEventListener("click", async () => {

  startBttn.disabled = true;
  // call visualizeMaze function here with your solution
  const mazeResults = document.getElementById("result");
  mazeResults.innerHTML = ""

  //checking entered maze
  let mazeArr = CheckMazeGrid()

  //checking starting coordinates
  let startStr = document.getElementById("start-cord").value.trim();
  let startCordErr = document.getElementById("start-cord-error");
  let startArr, endArr

  //checking ending coordinates
  const endstr = document.getElementById("end-cord").value.trim()
  let endCordErr = document.getElementById("end-cord-error")

  if (mazeArr !== undefined) {
    startArr = CheckCordinates(startStr, startCordErr, mazeArr)
    endArr = CheckCordinates(endstr, endCordErr, mazeArr)
  }

  //main logic
  if (mazeArr !== undefined && startArr !== undefined && endArr !== undefined) {

    //checks if entered two coordinates are the same and displays an error 
    if (startArr[0] === endArr[0] && startArr[1] === endArr[1]) {
      startCordErr.innerHTML = "Coordinates cannot be the same"
      endCordErr.innerHTML = "Coordinates cannot be the same"
      startBttn.disabled = false;
      return
    }

    await PathFinding(mazeArr, startArr, endArr);//BFS algorithm to find shortest path from point A to point B

    //checks weather the maze is solved or not
    let isSolved = false

    for (let row = 0; row < mazeArr.length; row++) {
      for (let col = 0; col < mazeArr[row].length; col++) {
        if (mazeArr[row][col] === 3) {
          isSolved = true
        }
      }
    }

    //displays appropirate message
    if (isSolved) {
      mazeResults.innerHTML = "Maze is solved"
    } else {
      mazeResults.innerHTML = "Maze cannot be solved"
    }
  }

  console.log("HERE")

  startBttn.disabled = false;
});

