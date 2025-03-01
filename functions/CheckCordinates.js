function CheckCordinates(cords, cordError, mazeArr){

    cordError.innerHTML = ""
   
    //checks if cords were not inputted
    if(cords === ""){
         cordError.innerHTML = "Error: cordinate cannot be empty"
         return
    }

    let cordsArr = cords.split(",")
    //console.log(cordsArr)

    //checks if user entered more than one value
    if(cordsArr.length !== 2){
        cordError.innerHTML = "Error: cordinate has to have only two values"
        return
    }


    //checks if cordinates for numbers
    for(let i=0; i<cordsArr.length; i++){
        //returns false if element is not a number
        if(isNaN(Number(cordsArr[i]))){
            cordError.innerHTML = "Error: cordinates have to be anumer"
            return
        }
    }

    //converts sting cordinates into number type
    for(let i =0; i<cordsArr.length; i++){
        cordsArr[i] = Number(cordsArr[i])
    }
      
    //checks if cordinates which are indexes exist in actual maze array
    if(!(cordsArr[0]>=0 && cordsArr[0]< mazeArr.length && cordsArr[1] >=0 && cordsArr[1] < mazeArr.length)){
         cordError.innerHTML = "Error: cordinates doesn't exist"
         return
    }


    if(mazeArr[cordsArr[0][cordsArr[1]]] === 1){
        cordError.innerHTML = "Error: thid cordinates is a wall"
        return
    }


    return cordsArr;
}


export {CheckCordinates}