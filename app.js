let userscore = 0;
let compscore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
 
};

 const drawGame = () => { 
   
    msg.innerText = "game was draw .play again";
      msg.style.backgroundColor = "purple";

 };    

 const showWinner = (userwin, userchoice, compChoice) => {
     if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;

         console.log("you win !");
         msg.innerText = `you win ! your ${userchoice} beats ${compChoice}`;
         msg.style.backgroundColor= "green";

     } else{
         compscore++;
        compscorepara.innerText = compscore;
         
         msg.innerText = `you loose . ${compChoice} beats ${userChoice}`;
         msg.style.nbackgroundColor= "red";
     }
 };


const playGame = (userchoice)=> {
     
     //generate computer choice -> modular 
     const compChoice = gencompchoice();
    

     if(userchoice === compChoice){
        //draw game
        drawGame();
     }else {
        let userwin = true;
        if(userchoice === "rock"){
            //scissors,paper
            userwin = compChoice ==="paper" ? false : true;
        }else if (userchoice ==="paper"){
            //rock,scissors
            userwin = compChoice === "scissors" ? false : true;

        }else{
            //rock,paper
             userwin = compChoice ==="rock" ? false: true ;

        }
        showWinner(userwin,userchoice,compChoice);
}
};

choices.forEach((choice) => {
    
    choice.addEventListener("click", () =>{

         const userchoice = choice.getAttribute("id");
         playGame( userchoice);


    });
});

   


