var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var articles = {
    
 'article-one' : {
     title: 'IMAD|Nupoor Tendolkar',
     heading:'Article-One',
     date:'23rd August 2017',
     content:`<p >  This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my firThis is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.</p>
           
           
           <p >  This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my firThis is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.</p>`
     
},
 'article-two' : {
     title: 'IMAD|Nupoor Tendolkar',
     heading:'Article-Two',
     date:'23rd August 2017',
     content:`<p >  This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my firThis is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.</p>`
     },
 'article-three' : {
     title: 'IMAD|Nupoor Tendolkar',
     heading:'Article-Three',
     date:'23rd August 2017',
     content:`<p >  This 3rd is is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.</p>`
     }
};
var createTemplate = function (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate = `
        <html>
    <head>
      <title> ${title}
      </title>
      <meta name = 'viewport' content ='widt-device-width, initial-scale-1'/>
     <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
       <div class = 'container', id = 'maintext'>
           <div>
         <a href = '/'>Home</a>
          </div> 
          <hr/>
       <h3> ${heading}</h3>
       <div>${date}  </div>
           <div>
            ${content}
           </div>
       </div>
    </body>
</html>`;
 return htmlTemplate;
};


app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res){
    counter = counter + 1 ;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});




app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name/',function (req, res){//url submit-name?name.XXXXXXxxxxx
    //get the name from the request 
    var name = req.params.name;//Todo
    
    names.push(name);
    //using JSON now
    res.send(JSON.stringify(names));
})


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
