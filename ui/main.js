console.log('Loaded!');

// Change the text
var element = document.getElementById('james');

element.innerHTML = "Changed and New";

//move the image..

var img = document.getElementById('leaf');
element.onclick = function()
{
    img.style.marginLeft = '300px';
}; 