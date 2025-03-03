function CheckCordinates(cords, cordError, mazeArr){

    cordError.innerHTML = ""
   
    //checks if cords are empty
    if(cords === ""){
         cordError.innerHTML = "Coordinate field cannot be empty"
         return
    }

    //splits cords string by ,
    let cordsArr = cords.split(",")
 
    //checks if user entered more than one value
    if(cordsArr.length !== 2){
        cordError.innerHTML = "Coordinates have to have only 2 values"
        return
    }


    //checks if coordinates are numbers
    for(let i=0; i<cordsArr.length; i++){
        //returns false if element is not a number
        if(isNaN(Number(cordsArr[i])) || cordsArr[i] === ""){
            cordError.innerHTML = "Coordinates have to be nubmer"
            return
        }
    }

    //converts sting coordinates into number type
    for(let i =0; i<cordsArr.length; i++){
        cordsArr[i] = Number(cordsArr[i])
    }
      
    //checks if coordinates exist within the maze
    if(cordsArr[0]<0 ||  cordsArr[1] <0){
         cordError.innerHTML = "This coordinates does not exist within the maze"
         return
    }

     //checks if coordinates exist within the maze
    if( cordsArr[0] > mazeArr[1].length && cordsArr[0] > mazeArr[1].length){
        cordError.innerHTML = "This coordinates does not exist within the maze"
        return
    }

    //checks if coordinates exist within the maze
    if(cordsArr[1] > mazeArr.length  && cordsArr[1] > mazeArr.length ){
        cordError.innerHTML = "This coordinates does not exist within the maze"
        return
    }

    console.log(cordsArr)

    //checks if coordinates is a wall 
    if(mazeArr[cordsArr[0]][cordsArr[1]]=== 1){
        cordError.innerHTML = "This coordinates is a wall"
        return
    }
  

    return cordsArr;
}


export {CheckCordinates}