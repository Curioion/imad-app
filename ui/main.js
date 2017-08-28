// Counter Button Code
var button = document.getElementByID('plant');
var counter = 0;
button.onclick = function () {
    
    //make a request
    
    
    //capture the request
    
    //render the correct span
  counter = counter  + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};