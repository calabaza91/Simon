const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

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

    playSound(randomChosenColor);

};

//Click on btn to choose color
$('.btn').click(function(){
  //Store id of selected button
  let userChosenColor = $(this).prop('id');
  //Add selected buttons to userClickedPattern array
  userClickedPattern.push(userChosenColor);
  //Make the button beep
  playSound(userChosenColor);
  console.log(userClickedPattern);
});

//Plas corresponding button sound
function playSound(name){
  let audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
};

//Call next sequence function
nextSquence();
