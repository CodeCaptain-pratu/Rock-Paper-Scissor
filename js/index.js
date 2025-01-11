let rock=document.getElementById("Rock");
let paper=document.getElementById("Paper");
let scissor=document.getElementById("Scissor");
let options=document.querySelectorAll(".option");
let msg=document.querySelector(".msg-container p");
let userScore=document.querySelector("#userScore");
let computerScore=document.querySelector("#computerScore");
let user=0;
let computer=0;
console.log(msg);

function winner(userWin){
    if(userWin){
        user++;
        msg.innerHTML=`You win the game🎉🎊`;
        msg.style.backgroundColor="#04724D"
        userScore.innerHTML=user;
    }
    else{
        computer++;
        msg.innerHTML=`Better luck next time You lost the game 😥`;
        msg.style.backgroundColor="#E71D36"
        computerScore.innerHTML=computer;
    }
}


function computerOptions(){
    let str=["Rock","Paper","Scissor"];
    let strIndex=Math.floor(Math.random()*3);
    return str[strIndex];
}

function playGame(userChoice){
    console.log("UserChoice",userChoice);
    let computerChoice=computerOptions();
    console.log("Computer choice is",computerChoice);
    let userWin=true;
    if(userChoice===computerChoice){
        msg.innerHTML=`Oops It is a draw ✌️`;
        msg.style.backgroundColor="blue";
    }
    else{
       if(userChoice==="Rock"){
        //paper scissor 
        userWin=computerChoice=="Scissor"?true:false;
       }
       else if(userChoice==="Paper"){
        //rock scissor 
        userWin=computerChoice==="Rock"?true:false;
       }
       else{
        //rock paper
        userWin=computerChoice==="Paper"?true:false;
       }
       winner(userWin);
    }
}

options.forEach(function(option){
    option.addEventListener("click",function(){
        let userChoice=option.getAttribute("id");
        // console.log("UserChoice",userChoice);
        playGame(userChoice);
    })
})


