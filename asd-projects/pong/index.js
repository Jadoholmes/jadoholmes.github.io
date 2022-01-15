/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  


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
  var x = parseFloat($("#id").css("left"));
  var y = parseFloat($("#id").css("top"));
  var width = $("#id").width();
  var height = $("#id").height();
  var leftPaddle = {};
leftPaddle.x = 0;
leftPaddle.y = 100;
leftPaddle.speedX = 1;
leftPaddle.speedY = 1;
leftPaddle.id = "#leftPaddle"

//one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  $(document).on('keydown', handleKeyDown);
$(document).on('keyup', handleKeyUp);



  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    redrawGameItem() 

  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
    positionX += speedX
    positionY += speedY
  }

  function redrawGameItem() {
    $("#leftPaddle").css("left", positionX);
    $("#leftPaddle").css("top", positionY);
  }

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
