function PathFinding(mazeArr, startCord, endCord) {

    // Direction vectors
    var dRow = [-1, 0, 1, 0];
    var dCol = [0, 1, 0, -1];

    let prevCell = new Map()

    function isValid(row, col, mazeArr) {

        //checks current cell indexis 
        if (row >= mazeArr.length || col >= mazeArr[0].length || row < 0 || col < 0) {
            return false
        }

        //checks if current cell is wall or not
        if (mazeArr[row][col] === 1) {
            return false
        }

        //checks if current cell is visited or not
        if (mazeArr[row][col] === 2) {
            return false
        }

        return true
    }


    //queue of to visit cells 
    var que = []

    que.push(startCord)
    mazeArr[startCord[0]][startCord[1]] = 2;

    while (que.length !== 0) {
       
        var currentCell = que[0];
        var x = currentCell[0];
        var y = currentCell[1];
        //console.log(currentCell)

        que.shift();

        // Go to the adjacent cells
        for (var i = 0; i < 4; i++) {

            var adjx = x + dRow[i];
            var adjy = y + dCol[i];

            if (isValid(adjx, adjy, mazeArr)) {
                que.push([adjx, adjy]);
                prevCell.set(`${adjx},${adjy}`, currentCell)
                mazeArr[adjx][adjy] = 2;
                 
                //if endpoint is found exit the function
                if(endCord[0] === adjx && endCord[1] === adjy){
                   console.log(prevCell)

                    adjx = endCord[0]
                    adjy = endCord[1]
                    
                     while(adjx !== startCord[0] || adjy !== startCord[1]){

                         mazeArr[adjx][adjy] = 3;
                         console.log(mazeArr)
                         let parentCell =  prevCell.get(`${adjx},${adjy}`)
                         adjx = parentCell[0]
                         adjy = parentCell[1]

                         console.log("Currecnt parent cell", adjx , adjy)
                     }

                    return
                }
            }
        }


    }
}


export { PathFinding }




