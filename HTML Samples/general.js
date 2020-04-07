
var mute = false;

var lastUtterance = "";

function muteSound()
{
	mute = !mute;
	var element = document.getElementById("muteButton");
	if(mute)
	{
	   element.style.backgroundColor = "#F1B300";
	   window.speechSynthesis.cancel();
	}
    else
	   element.style.backgroundColor = "#808080";   
}

function reallySayIt(inputString)
{
  var msg = new SpeechSynthesisUtterance(inputString);
  window.speechSynthesis.speak(msg);	  
}

function sayItAgain()
{
   var msg = "";
   if(lastUtterance == "")
   {
	   msg = "I didn't say anything";
   }
   else
   {
	   msg = "I said, " + lastUtterance;
   }
   
   if(mute) {
      msg = msg + ". By the way, I would be easier to hear if you didn't mute me.";	
   }    
   reallySayIt(msg);
   //alert(msg);
}

function sayIt(inputString)
{
   lastUtterance = inputString;
   if(!mute) {
      reallySayIt(inputString);
   }   
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomCount(max) {
  return getRandomInt(max - 1) + 1;
}

function hideElement(id) {
	//Note: visibility:hidden means that the contents of the element will be invisible, but the element stays in its original position and size.
	//      display:none hides the entire element.
  var itemToHide =  document.getElementById(id);  
  itemToHide.style.visibility = "hidden";
  itemToHide.disabled = true;
}

function showElement(id, newText) {
  var itemToShow =  document.getElementById(id);
  itemToShow.style.visibility = "visible";
  itemToShow.disabled = false;
  if(newText != 'undefined')
     itemToShow.value = newText;
}

function isHidden(id) {
	var el =  document.getElementById(id);
    return (el.style.visibility == "hidden");
}

function existsId(id) {
	var el =  document.getElementById(id);
    return (el != null);
}

function deleteId(id) {
	var el =  document.getElementById(id);
	if(existsId(id)) {
		el.parentNode.removeChild(el);
		return(true);
	}
	return(false);
}

function isPrime(id) {
	var val =  parseInt(id,10);
	var i
	for(i=2; i<= Math.sqrt(id); i++)
	{
		if(id % i == 0)
			return false;
	}
    return (true);
}

function newLine(element) {
	var br = document.createElement("br");
	element.appendChild(br);
}
