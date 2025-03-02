import {CheckMazeGrid} from "./functions/CheckMazeGrid.js"
import { CheckCordinates } from "./functions/CheckCordinates.js";
import { VisualizeMaze } from "./functions/VisualzeMaze.js";
import {PathFinding} from "./functions/PathFinding.js"


const startBtn = document.getElementById("find-path-btn");



startBtn.addEventListener("click", () => {
  // call visualizeMaze function here with your solution

    //checking entered maze
    let mazeArr = CheckMazeGrid()

    let startStr = document.getElementById("start-cord").value.trim();
    let startCordErr = document.getElementById("start-cord-error");
    let startArr = CheckCordinates(startStr, startCordErr, mazeArr)

    
    const endstr = document.getElementById("end-cord").value.trim()
    let endCorErr = document.getElementById("end-cord-error")
    let endArr = CheckCordinates(endstr, endCorErr, mazeArr)

    //checks if entered two cordinates are the same and displays an error 
    if(startArr[0] === endArr[0] && startArr[1] === endArr[0]){
      endCorErr.innerHTML = "Error: cordinates cannot be the same"
      return
    }
  

    //main logic
    if(mazeArr !== undefined && startArr !== undefined && endArr !== undefined){
      VisualizeMaze(mazeArr, startArr, endArr);
      PathFinding(mazeArr, startArr, endArr);//BFS algorithm to find shortest path from point A to point B
     console.log(mazeArr)
     VisualizeMaze(mazeArr, startArr, endArr)
    }
});