function getComputerChoice(){
    let x = Math.random() * 3.0;
    if(x < 1.0){
        return "rock";
    }
    else if(x < 2.0){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function getHumanChoice(){
    let x = prompt("Enter you input");
    return x;
}


let score = 0;
for(let i = 0 ; i < 5 ; i++){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if(humanChoice == "exit"){
        break;
    }
    if(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
        console.log("wrong input: " + humanChoice + " is not one of \"rock\", \"paper\" or \"scissors\"" );
        continue
    }
    if((computerChoice == "rock" && humanChoice == "paper") ||(computerChoice == "paper" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "rock") ){
        score++;
        console.log("You won! your new score is " + score );
    }
    else{

        console.log("You failed! your score is " + score );
    }
    console.log("the our choice was " + computerChoice);
}