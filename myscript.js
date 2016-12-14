$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";             //Tell jQuery to be strict about the syntax.
    $("#squareMakerButton").click(makeSquare);
    $("#myList li:nth-child(3)").hover(myFunction2); 
    $("#myList li:nth-child(3)").on("click", swapMe);
});
//-------------------------------------------------------------------
//The code below are functions that will only run when called by name.
// SquareMaker Code:
function makeSquare() {
    console.log("hit");
    $("#squareMaker").html("");
    //
    var numOfSquares = ($("#squareMakerInput").val());
    //very simple, just replace the "#squaremakerinput value with the value of five so that the computer knows what to reference. I tried to make the var x= x but it started an infinite loop and made my entire javascript crash, but I have since learned from my foolish mistakes.
    console.log($("#squareMakerInput").val());
    for (var x=0 ; x < numOfSquares ; x++){
        $("#squareMaker").append("<div class=\"square\"></div>");
        console.log(x);
    };
};
function myFunction2() {
    // Changes the css
    $(this).css({"text-shadow":"4px 4px #FFFF00","font-size":"300%"});
}
function swapMe() {
    // create a variable and store the contents of the third item.
    var tempText = $("#myList li:nth-child(3)").text();
    // Replace the contents of the 3rd item with the contents of the 4rth.
    $("#myList li:nth-child(3)").text($("#myList li:nth-child(4)").text());
    // Replace the contents of item 4 with the contents of the "tempText".
    $("#myList li:nth-child(4)").text(tempText);
};