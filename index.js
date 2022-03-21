var noOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<noOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",playSound);
}

function playSound(){
  var buttonInnerHTML = this.innerHTML;

  switch (buttonInnerHTML) {
    case "w":
      var aud = new Audio("sounds/tom-1.mp3");
      aud.play();
    case "a":
      var aud1 = new Audio("sounds/tom-2.mp3");
      aud1.play();
    case "s":
      var aud2 = new Audio("sounds/tom-3.mp3");
      aud2.play();
    case "s":
      var aud3 = new Audio("sounds/tom-3.mp3");
      aud3.play();
    case "d":
      var aud4 = new Audio("sounds/tom-4.mp3");
      aud4.play();
    case "j":
      var aud5 = new Audio("sounds/snare.mp3");
      aud5.play();
    case "k":
      var aud6 = new Audio("sounds/crash.mp3");
      aud6.play();
    case "l":
      var aud7 = new Audio("sounds/kick-bass.mp3");
      aud7.play();
      break;
    default:
      console.log(buttonInnerHTML);
  } 
}
