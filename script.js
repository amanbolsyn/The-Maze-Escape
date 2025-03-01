import {CheckMazeGrid} from "./functions/CheckMazeGrid.js"
import { CheckCordinates } from "./functions/CheckCordinates.js";
import { VisualizeMaze } from "./functions/VisualzeMaze.js";


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


     console.log(mazeArr)

    //main logic
    if(mazeArr !== undefined && startArr !== undefined && endArr !== undefined){
      VisualizeMaze(mazeArr, startArr, endArr);
    }
});