let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector("score-board");
const result_div_p = document.querySelector(".results > p ");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");



function getComputerChoice(){
    const choices = ['r','s','p'];
    const randomNum = Math.floor(Math.random() * 3); 
    return choices[randomNum];
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose (userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function convertWord(letter){
    if ( letter == "r") return "Rock";
    if ( letter == "s") return "Scissors";
    return "Paper";
}

function win(userChoice, computerChoice){         
    console.log("win");
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div_p.innerHTML = convertWord(userChoice) + "(You) Beat "+ convertWord(computerChoice ) + "(Computer) You Win  ";
    const glow = document.getElementById(userChoice)
    glow.classList.add('green-glow');
    setTimeout(function()  { glow.classList.remove('green-glow')  },  600 );
}

function lose(userChoice, computerChoice) {   
    console.log("lose");
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div_p.innerHTML =convertWord(userChoice) +"(You) Beats By "+convertWord(computerChoice)+"(Computer) You Lose";
    const glow = document.getElementById(userChoice)
    glow.classList.add('red-glow');
    setTimeout(function()   { glow.classList.remove('red-glow')  }, 600);
    }

function draw(userChoice,computerChoice) {    
    console.log("draw");
    result_div_p.innerHTML = convertWord(userChoice)+ "(You) And " +convertWord(computerChoice)+ "(Computer) Both Are Same. It's Draw. ";
    const glow = document.getElementById(userChoice)
    glow.classList.add('yellow-glow');
    setTimeout(function() {glow.classList.remove('yellow-glow') }, 600);
}


function main(){
    rock_div.addEventListener('click',  function() {
        game("r");
    })
    scissors_div.addEventListener('click',  function() {
        game("s");
    })

    paper_div.addEventListener('click',  function() {
        game("p");
    })  
}

main();