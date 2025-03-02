import { VisualizeMaze } from "./VisualzeMaze.js";

//implemented BFS method to find the shortest between two coordinates
async function PathFinding(mazeArr, startCord, endCord) {

    // Direction vectors: up, right, down, left
    var dRow = [-1, 0, 1, 0];
    var dCol = [0, 1, 0, -1];

    //stores indexes of parentcell of each childcell. 
    let prevCell = new Map()

    //queue of to visit cells 
    var que = []

    //pushing starting coordinated to the queue
    que.push(startCord)
    //chaning the value of starting coordinates to visited
    mazeArr[startCord[0]][startCord[1]] = 2;


    //initial vizualization of the maze
    VisualizeMaze(mazeArr, startCord, endCord);

    //contnuie executing until queue is empty or end coordinates are found
    while (que.length !== 0) {

        var currentCell = que[0]
        var x = currentCell[0];
        var y = currentCell[1];
        //console.log(currentCell)

        que.shift();//removes first element from the queue 

        // Go to the adjacent cells of current cell
        for (var i = 0; i < 4; i++) {

            //calculating indexes of each adjacent cell
            var adjx = x + dRow[i];
            var adjy = y + dCol[i];

            //checking each adjacent cell for validness to visit
            if (isValid(adjx, adjy, mazeArr)) {
                
                //adding to the queue each valid adjacent cell of current cell
                que.push([adjx, adjy]);
                //storing indexes of parent cell and child cell
                prevCell.set(`${adjx},${adjy}`, currentCell)
                mazeArr[adjx][adjy] = 2;//converting cells to visited

                //if end coordinates are found exit the function
                if (endCord[0] === adjx && endCord[1] === adjy) {

                    adjx = endCord[0]
                    adjy = endCord[1]

                    //traversing back from end coordinates to starting coordinates to display shortest path beetwen them
                    while (adjx !== startCord[0] || adjy !== startCord[1]) {

                        // await sleep(500)
                        VisualizeMaze(mazeArr, startCord, endCord)

                        mazeArr[adjx][adjy] = 3;
                        //console.log(mazeArr)
                        let parentCell = prevCell.get(`${adjx},${adjy}`)
                        adjx = parentCell[0]
                        adjy = parentCell[1]

                    }

                    // await sleep(0)
                    VisualizeMaze(mazeArr, startCord, endCord)

                    return
                }

                // await sleep(0)
                VisualizeMaze(mazeArr, startCord, endCord)
            }
        }

        
    }
}


// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

//checks if current cell is valid to visit
function isValid(row, col, mazeArr) {

    //checks current cell indexis 
    if (row >= mazeArr.length || col >= mazeArr[0].length || row < 0 || col < 0) {
        return false
    }

    //checks if current cell is wall or not
    if (mazeArr[row][col] === 1) {
        return false
    }

    //checks if  current cell is visited or not
    if (mazeArr[row][col] === 2) {
        return false
    }

    return true
}


export { PathFinding }




