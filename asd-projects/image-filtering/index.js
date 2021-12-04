// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here





    render($display, image);
    applyFilter()

});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter();
    for (var r = 0; r<image.length; r++){
var row = image[r];

for (var c = 0; c < row.length; c++) { 
    var value = grid[r][c];

    rgb = rgb(110,110,110)(value);
}
}

// TODO 6: Create the applyFilterNoBackground function


// TODO 3 & 5: Create filter functions


// CHALLENGE code goes below here
