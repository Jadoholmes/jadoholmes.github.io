/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  
var KEY = {
  "LEFT": 37,
  "UP": 38,
  "RIGHT": 39,
  "DOWN": 40,
  "ENTER": 13,
}




  // Game Item Objects

  var positionX = 0; 
  var speedX = 0; 
  var positionY = 0;
  var speedY = 0;

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
 
$(document).on('keydown', handleKeyDown);
$(document).on('keyup', handleKeyUp);

function handleKeyDown(event) { 
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }
   else if (event.which === KEY.LEFT) {
      console.log("left pressed");
    }
    else if (event.which === KEY.UP) {
      console.log("up pressed");
    }
    else if (event.which === KEY.RIGHT) {
      console.log("right pressed");
    }
   else if (event.which === KEY.DOWN) {
      console.log("down pressed");
    }

    if (event.which === KEY.LEFT) {
      speedX = -5;
    }
    else if (event.which === KEY.RIGHT) {
      speedX = 5
    }
    else if (event.which === KEY.UP){
      speedY = -5
    }
    else if (event.which === KEY.DOWN){
      speedY = 5
    }
}

function handleKeyUp(event) {
  if (event.which === KEY.LEFT) {
    speedX = 0;
  }
  else if (event.which === KEY.RIGHT) {
    speedX = 0
  }
  else if (event.which === KEY.UP){
    speedY = 0
  }
  else if (event.which === KEY.DOWN){
    speedY = 0
  }
}

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    // call the repositionGameItem and redrawGameItem functions in here
   repositionGameItem()
   redrawGameItem() //yes
  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // also minor issue with declaring the functions. 
  // Check line 89 for a reference
  function repositionGameItem() {
    positionX += speedX
    positionY += speedY
  }

  function redrawGameItem() {
    $("#box").css("left", positionX);
    $("#box").css("top", positionY);
  }


  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
