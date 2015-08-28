$(document).ready(function() {
	var randomNumber = Math.floor(Math.random() * 9);
    $( "#unclicked" ).mouseenter(function(event) {
  		$( "#unclicked" ).fadeToggle( "slow");
	});
});