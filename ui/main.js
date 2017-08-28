// Counter Button Code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //Create request Object
    var request = new XMLHttpRequest();
    
    //capture the request
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200 )
            {
               var counter = request.responseText;
                var span = document.getElementById('count');
               span.innerHTML = counter.toString();
            }
        }
    };
    //Make a request
    request.open('GET','http://nvdt13513.imad.hasura-app.io/counter', true);
    request.send(null);
    
};
//submit input code
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    var submit = document.getElementById('submit_btn');
    submit.onclick = function(){
        //Make a request ot the server and send the name
        
        //Capture the list of names and render it as a list.
        var names = ['Name1','Name2','Name3','Name4','Name5'];
        var list = '';
        for(var i = 0; i<names.length; i++)
        {
            list += '<li>' + names[i] + '</li>';
        }
        var ul =document.getElementById('nameList');
        ul.innerHTML = list;
    };
    