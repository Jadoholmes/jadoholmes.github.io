// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here



    applyFilter()
    
    render($display, image);
    

});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here


function applyFilter(){
    for (var i=0; i < image.length; i++) {
     var row = image[i];
        for (var j=0; j < row.length; j++) {
             var rgbstring= image [i][j];
             var rgbnumber = rgbStringToArray(rgbstring)
                rgbnumber[255] 
                rgbnumber[0]
                rgbnumber[0]
        }
     }
      


// TODO 6: Create the applyFilterNoBackground function


// TODO 3 & 5: Create filter functions


// CHALLENGE code goes below here
