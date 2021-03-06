var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;


var config = {
   user: 'nvdt13513',
  host: 'db.imad.hasura.io',
  database: 'nvdt13513',
  password: process.env.DB_PASSWORD,
  port: 5432
};
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
const pool = new Pool(config);
app.get('/test-db',function(req,res){
    
    pool.query('Select * from test', function(err,result){
        if(err)
        {
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result));
        }
    });
    
});
var counter = 0;
app.get('/counter', function (req, res){
    counter = counter + 1 ;
    res.send(counter.toString());
});


var names = [];
app.get('/submit-name',function (req, res){// URL: /submit-name?name=xxxxx
    //get the name from the request 
    var name = req.query.name;//Todo
    
    names.push(name);
    //using JSON now
    res.send(JSON.stringify(names));
})


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



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
