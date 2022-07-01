var btns = document.getElementsByClassName("drum");


  document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
  });


for (i = 0; btns.length; i++) {
  btns[i].addEventListener("click", function () {
 var buttonclicked  = this.textContent;
 makesound(buttonclicked);
 buttonanimation(buttonclicked);
  }
  )
}
 function makesound(key) {
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom1 = new Audio("sounds/tom-2.mp3");
        tom1.play();
        break;
      case "s":
        var tom1 = new Audio("sounds/tom-3.mp3");
        tom1.play();
        break;
      case "d":
        var tom1 = new Audio("sounds/tom-4.mp3");
        tom1.play();
        break;
      case "j":
        var tom1 = new Audio("sounds/snare.mp3");
        tom1.play();
        break;
      case "k":
        var tom1 = new Audio("sounds/crash.mp3");
        tom1.play();
        break;
      case "l":
        var tom1 = new Audio("sounds/kick-bass.mp3");
        tom1.play();
        break;
      default:
        console.log();

    }
  }

function buttonanimation(currentkey){
 var activebutton = document.querySelector("."+currentkey);
activebutton.classList.add("pressed");
setTimeout(function(){
  activebutton.classList.remove("pressed");
},100);
}