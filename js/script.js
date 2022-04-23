var elInput = document.querySelector(".input");
var elButton = document.querySelector(".button");
var elOutput = document.querySelector(".output");

var allowAge = 18;

var notAllowed = "Your age is still small";
var allowed = "Your age is right,you can enter!"
elButton.addEventListener("click", function(e){
  e.preventDefault();

  var age = elInput.value.trim();

  if(age >= allowAge){
    elOutput.textContent = allowed;
  }

  else{
    elOutput.textContent = notAllowed;
  }

})
