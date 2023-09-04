const prompt = require("prompt-sync")();

const deposit = () =>{
    while(true){
    const depositAmount = prompt("Enter Deposit Amount ")
    const depoistAmountNumber = parseFloat(depositAmount)
    if( isNaN(depoistAmountNumber) || depoistAmountNumber <= 0){
        console.log("Deposit Number Invalid")
    }
    else{
        return depoistAmountNumber 
    }
    }
}
const getNumberOfLines = () =>{
    while(true){
        const lines = prompt("Enter the number of lines from 1 to 3 ")
        const linesNumber = parseFloat(lines)
        if(isNaN(linesNumber) || linesNumber <=0 || linesNumber >3){
            console.log("Invalid Line Numbers")
        }
        else{
            return linesNumber
        }
    }
}

const getBet = (balance) => {
    while(true){
        const bet = prompt("Enter the Bet Amount");
        const betNumber = parseFloat(bet)
        if(bet > balance || bet <0 || isNaN(betNumber)){
            console.log("Invalid Bet")
        }
        else{
            return betNumber
        }
    }
}
let balance = deposit();
const linesNumber = getNumberOfLines();
const bet = getBet(balance)

