var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    if(request.readyState===XMLHttpRequest.DONE)
    {
     if(request.status === 200 )
     {
         var counter = request.responseText;
          var span = document.getElementById('count');
         span.innerHTML = counter.toString();
     }
    }
    request.open('GET', 'http://nvdt13513.imad.hasura-app.io/counter',true);
    request.send(null);
};

button.onclick = function(){
    if(request.readyState===XMLHttpRequest.DONE)
    {
     if(request.status === 200 )
     {
         var names = request.responseText;
         names = JSON.parse(names);
        var list = '';
      for(var i = 0; i< names.lenght;i++)
       {
         list += '<li>' + names[i] + '</li>';
     }
   var ul = document.getElementById('nameList');
   ul.innerHTML = list;
         
     }
    }
    request.open('GET', 'http://nvdt13513.imad.hasura-app.io/submit-name?name=',true);
    request.send(null);
};

//SUBMIT NAME
 var nameInput = document.getElementById('name');
 var name = nameInput.value;
 var submit = document.getElementById('submit_btn');
 submit.onclick= function(){
     var names = ['name1','name2','name3','name4','name5'];
     var list = '';
     for(var i = 0; i< names.lenght;i++)
     {
         list += '<li>' + names[i] + '</li>';
     }
   var ul = document.getElementById('nameList');
   ul.innerHTML = list;
 };