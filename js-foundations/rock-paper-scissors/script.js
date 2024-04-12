const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const text = document.querySelector('#out');
const choices = ["Scissors", "Rock", "Paper", "Scissors"];
const scores = [0,0];
const scoreText= document.querySelector("#score");
// initialize buttons
rock.addEventListener("click", function () {play(1)});
paper.addEventListener("click", function () {play(2)});
scissors.addEventListener("click", function () {play(3)});


function play(num) {
    text.innerText = "You chose " + choices[num] + ".\n";
    const ai = 1+Math.floor(Math.random() * 3);
    text.innerText += "The computer chose " + choices[ai] + ".\n"
    console.log("comparing " + choices[num-1] + " to " + choices[ai])
    
    if (ai == num) {
        text.innerText += "TIE!";
    } else if (choices[num-1] === choices[ai]) {
        text.innerText += "You WIN!";
        scores[0]++;
    } else {
        text.innerText += "You LOSE!";
        scores[1]++;
    }
    updateScores();
}

function updateScores() {scoreText.innerText = "You -> " + scores[0]+" | "+scores[1]+" <- Computer"}