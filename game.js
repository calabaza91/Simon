const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

//Create a sequence of selected buttons
function nextSquence(){
    //Create random number 0-3
    let randomNum = Math.floor(Math.random()*4);
    //Randomly choose a color from the button colors array
    let randomChosenColor = buttonColors[randomNum];
    console.log(randomChosenColor);
    //Add random color to game pattern array
    gamePattern.push(randomChosenColor);

    //Select randomChosenColor div and make it blink and beep
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    let audio = new Audio('sounds/' + randomChosenColor + '.mp3');
    audio.play();

};


nextSquence();
