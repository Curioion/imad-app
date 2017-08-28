// Counter Button Code
var counter = 0;
var button = document.getElementByID('plant');
button.onclick = function(){
    
    //make a request
    
    
    //capture the request
    
    //render the correct span
  counter = counter  + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};