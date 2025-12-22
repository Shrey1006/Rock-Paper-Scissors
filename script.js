let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const drawgame = () => {
    msg.innerText = "Game was Draw, Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText = `You Lose! ${compChoice} Beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
} 

const genCompChoice = () => {
    const option = [ "rock" , "paper" , "scissors"];
    const randIDX = Math.floor(Math.random() * 3);
    return option[randIDX];
}

const playGame = (userChoice) => {
    console.log("user-Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp-Choice = ", compChoice);

    if( userChoice === compChoice ){
        //draw
        drawgame();
    }else {
        let userwin = true;
        if( userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userwin = compChoice === "scissors" ? false : true;
        }else {
            userwin = compChoice === "rock" ? false : true;
        }

        showWinner(userwin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})