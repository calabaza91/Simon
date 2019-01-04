const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];





//User selection function
$('.btn').click(function(){
  //Store id of selected button
  let userChosenColor = $(this).prop('id');
  //Add selected buttons to userClickedPattern array
  userClickedPattern.push(userChosenColor);

  //Make the button beep
  playSound(userChosenColor);
  animatePress(userChosenColor);

  console.log(userClickedPattern);
});



//Game selection function
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
    //Make button beep
    playSound(randomChosenColor);

};


//Button Sound function
function playSound(name){
  let audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
};



//Button Animation function
function animatePress(currentColor){
  $('#' + currentColor).addClass('pressed');

  setTimeout(function(){
    $('#' + currentColor).removeClass('pressed');
  }, 100);
};

//Call next sequence function
nextSquence();
