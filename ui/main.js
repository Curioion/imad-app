console.log('Loaded!');

// Change the text
var element = document.getElementById('james');

element.innerHTML = "Changed and New";

//move the image..

var img = document.getElementById('leaf');
var marginLeft = 0;
function moveRight ()
{
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft+'px';
}

img.onclick = function()
{
    var interval = setInterval(moveRight,100);
}; 