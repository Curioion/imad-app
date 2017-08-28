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