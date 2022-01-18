// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here



    applyFilter(increaseGreenByBlue)
   // applyFilterNoBackground()

    render($display, image);
    

});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here


function applyFilter(filterFunction){
    for (var i=0; i < image.length; i++) {
     var row = image[i];
        for (var j=0; j < row.length; j++) {
             var rgbstring= image [i][j];
             var rgbnumber = rgbStringToArray(rgbstring);
                filterFunction(rgbnumber);
                rgbstring = rgbArrayToString(rgbnumber); 
              image [i][j] = rgbstring
        }
    }
}



// TODO 6: Create the applyFilterNoBackground function
var backGround = image[0][0];

function applyFilterNoBackground(filterFunction){
    for (var i=0; i < image.length; i++) {
        var row = image[i];
           for (var j=0; j < row.length; j++) {
                var rgbstring= image [i][j];
                var rgbnumber = rgbStringToArray(rgbstring);
                   if(rgbstring === backGround){
                     
                   }
                   else{
                    filterFunction(rgbnumber);
                   rgbstring = rgbArrayToString(rgbnumber); 
                 image [i][j] = rgbstring   
                   }
           }
       }
   }


// TODO 3 & 5: Create filter functions
function reddify(a){
   a [RED] = 250
  }

  function KeepInBounds(x){
   
    var result = Math.max(x, 0);
    var result2 = Math.min(result, 255);
  return result2
  }
  
  function decreaseBlue(i){
  i [BLUE] = KeepInBounds(i [BLUE] - 50); 
}

function increaseGreenByBlue(y){
    y [GREEN] = KeepInBounds(y [BLUE]+ y [GREEN])
}





// CHALLENGE code goes below here
