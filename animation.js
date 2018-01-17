/*
*Javascript Documentation
*This is the javascript 
*file for the 404 page animation
*and photo slideshow 
*
*Abbey Miles 
*12/2017
*/

//fade in from the left
var leftin = function ($element, speed) {
	"use strict";
    $element.animate({
        "left": "80%"
    }, speed);
};
$(function () {
	"use strict";
    leftin($("#b"), 10000);
	leftin($("#zero"), 8000);
	leftin($("#b2"), 6000);
});

//this changes the background images on a timer
function run(interval, frames) {
    "use strict";
    var int = 1;
    function func() {
        document.getElementsByClassName("maria")[0].id = "p" + int;
        int++;
        if (int === frames) { 
            int = 1; 
        }
    }
    var swap = window.setInterval(func, interval);
}
run(1500, 5);