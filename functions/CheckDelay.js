function CheckDelay() {

    let delayError = document.getElementById("delay-amount-err");
    delayError.innerHTML = "";
    let  delayStr = document.getElementById("delay-amount").value.trim();
    let delayNum = 0

    //checks if cords are empty
    if (delayStr === "") {
        //default value for delay amount is 0
        return delayNum;
    }

    //check if entered delay amount is a number
    if (isNaN(Number(delayStr))) {
        delayError.innerHTML = "Delay amount hast to be nubmer"
        return delayNum
    }

    //converts string delay amount into number type
    delayNum = Number(delayStr)


    if(delayNum > 10000){
        delayError.innerHTML = "Delay amount maximum is 10000 milliseconds"
        return delayNum = 0
    }

    if(delayNum<0){
        delayError.innerHTML = "Delay amount minimum is 0"
        return delayNum = 0;
    }
  
    return delayNum;
}

export {CheckDelay}