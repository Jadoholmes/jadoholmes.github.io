/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_WIDTH = $("#board").width();
  const BOARD_HEIGHT = $("#board").height();


  var KEY = {
    "UP": 38,
    "DOWN": 40,
    "W": 87,
    "S": 83,
  }

  // Game Item Objects
  
  
  function factory(elementId) {
var gameItem = {};
gameItem.id = elementId;
gameItem.x = parseFloat($(elementId).css('left'));
gameItem.y = parseFloat($(elementId).css('top'));
gameItem.width = $(elementId).width();
gameItem.height = $(elementId).height();
gameItem.speedX = 0;
gameItem.speedY = 0;
return gameItem;
}

var leftPaddle = factory("#leftPaddle");
var rightPaddle = factory("#rightPaddle");
var ball = factory("#ball");
var board = factory("#board");





  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp); 
  $(document).on('keydown', handleKeyDown2);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp2); 
  startBall()

//move right paddles
function handleKeyDown(event) { 
  
   if (event.which === KEY.W) {
    console.log("up pressed");
  }
 else if (event.which === KEY.S) {
    console.log("down pressed");
  }

 if (event.which === KEY.W && wallColision(leftPaddle) === "truetop"){
    leftPaddle.speedY = 0
  }
  else if (event.which === KEY.W  ){
    leftPaddle.speedY = -5
  }
  else if (event.which === KEY.S && wallColision(leftPaddle) === "truebottom"){
    leftPaddle.speedY = 0
  }
  else if (event.which === KEY.S){
    leftPaddle.speedY = 5
  }
}
//sstop right paddles 
function handleKeyUp(event) {
 if (event.which === KEY.W){
    leftPaddle.speedY = 0
  }
  else if (event.which === KEY.S){
    leftPaddle.speedY = 0
  }
  }

//move left paddles
  function handleKeyDown2(event) { 
  
   if (event.which === KEY.UP) {
      console.log("up pressed");
    }
    
   else if (event.which === KEY.DOWN) {
      console.log("down pressed");
    }
  
     if (event.which === KEY.DOWN && wallColision(rightPaddle) === "truebottom"  ){
      rightPaddle.speedY = 0
      console.log(wallColision)
  }
    else if(event.which === KEY.DOWN ){
      rightPaddle.speedY = 5
    }
    else if (event.which === KEY.UP  && wallColision(rightPaddle) === "truetop"){
      rightPaddle.speedY = 0
    }
    else if (event.which === KEY.UP ){
      rightPaddle.speedY = -5
    }
   
   
  }//stop left paddles
  function handleKeyUp2(event) {
   if (event.which === KEY.UP){
      rightPaddle.speedY = 0
    }
    else if (event.which === KEY.DOWN){
      rightPaddle.speedY = 0
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
    repositionGameItem()
    moveObject() //yes
    
  }
  
 
   
  //Called in response to events.

  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
function wallColision(obj){
  board.leftX = board.x;
  board.topY = board.y;
  board.rightX = board.x + BOARD_WIDTH;
  board.bottomY = board.y + BOARD_HEIGHT;

 obj.leftX = obj.x;
 obj.topY = obj.y;
 obj.rightX = obj.x + obj.width;
 obj.bottomY = obj.y + obj.height;



  if(obj.topY <= board.topY 
     ){
      return "truetop"
  }
  else if(obj.bottomY >= board.bottomY){
    return "truebottom"
   
  }
}
console.log(wallColision(rightPaddle))

  function repositionGameItem() {
    leftPaddle.x += leftPaddle.speedX
    leftPaddle.y += leftPaddle.speedY
    rightPaddle.x += rightPaddle.speedX
    rightPaddle.y += rightPaddle.speedY
    ball.x += ball.speedX
    ball.y += ball.speedY
  }

  function moveObject() {
    $("#rightPaddle").css("top",rightPaddle.y);
    $("#leftPaddle").css("top", leftPaddle.y);
    $(ball.id).css('left', ball.x);
    $(ball.id).css('top', ball.y);
  }
 
  function startBall(){
    $('#ball')
    .css('top', 220)
    .css('left', 220);
    randomNum = (Math.random() * 3+ 1) * (Math.random() > 0.5 ? -1 : 1);
    randomNum2 = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedX = randomNum;
    ball.speedY = randomNum2;
   
   
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
