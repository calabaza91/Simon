const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

//Create a sequence of selected buttons 
function nextSquence(){
    //Create random number 0-3
    let randomNum = Math.floor(Math.random()*4);
    //Randomly choose a color from the button colors array
    let randomChosenColor = buttonColors[randomNum];
    //Add random color to game pattern array
    gamePattern.push(randomChosenColor);
};
