const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

//If a key is pressed, start the game
$(document).keypress(function() {
  if (!started) {
    $('#level-title').text("Level " + level);
    nextSquence();
    started = true;
  }
});


//User selection function
$('.btn').click(function() {
  //Store id of selected button
  let userChosenColor = $(this).attr('id');
  //Add selected buttons to userClickedPattern array
  userClickedPattern.push(userChosenColor);

  //Make the button beep
  playSound(userChosenColor);
  animatePress(userChosenColor);

  //Check user Answer
  checkAnswer(userClickedPattern.length-1);
});

//Check Answer function
function checkAnswer(currentLevel){
  //Check if moast recent answer is correct
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");
    //Check if sequence is correct
    if(userClickedPattern.length === gamePattern.length)
      setTimeout(function(){
        nextSquence();
      },1000);
  }else{
    console.log("wrong")
  }

}


//Game selection function
function nextSquence() {
  //Reset userClickedPattern array
  userClickedPattern = [];

  //Increase level by 1
  level++;
  //Change h1 to display level
  $('#level-title').text("Level " + level);

  //Create random number 0-3
  let randomNum = Math.floor(Math.random() * 4);
  //Randomly choose a color from the button colors array
  let randomChosenColor = buttonColors[randomNum];
  console.log(randomChosenColor);
  //Add random color to game pattern array
  gamePattern.push(randomChosenColor);

  //Select randomChosenColor div and make it blink and beep
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  //Make button beep
  playSound(randomChosenColor);

};


//Button Sound function
function playSound(name) {
  let audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
};


//Button Animation function
function animatePress(currentColor) {
  $('#' + currentColor).addClass('pressed');

  setTimeout(function() {
    $('#' + currentColor).removeClass('pressed');
  }, 100);
};
