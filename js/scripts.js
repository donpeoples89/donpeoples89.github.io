


/* Temporarily Found a Fix. Not Pretty But Works */
var num = 0;

$(".header-image").on("click", function(){
 	if (num === 0) {
 	$("nav").fadeIn(300);
 	$("main").css("margin-top", "130px");
 	num +=1;	 
	} else {
	num = 0;
	}
});

$(".header-image").on("click", function(){
	if (num === 0) {
	$("nav").fadeOut(300);
	$("main").css("margin-top", "0px");
	num = 0;	 
   } else {
	num = 1;
   }
   });



$("button").on("click", function (){
	$("#contact").slideToggle(500);
});


$(document).ready(function() {
	$(main).fadeIn(3000)
})