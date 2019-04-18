var message = "Message here";
setInterval(function(){
	window.InputEvent = window.Event || window.InputEvent; 
	var event = new InputEvent('input', {bubbles: true}); 
	var textbox = $('div._2S1VP'); 
    textbox.textContent = message; 
	textbox.dispatchEvent(event); 
    $("button._35EW6").click();
}, 1000);