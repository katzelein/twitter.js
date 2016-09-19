var express = require('express');
var app = express();
var port = 3000;
var nunjucks = require('nunjucks');

var text = {
  title: 'An Example',
  people: [
    {name:'Gandalf'},
    {name:'Frodo'},
    {name:'Hermione'}
  ]
}

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', text,function(err,result) {
  console.log(result)
});

app.listen(port,function() {
  console.log('hi');
})

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
})

app.get('/',function(request,response,next) {
  response.send('welcome');
  next();
})

app.get('/is-anybody-in-there', function(request,response,next) {
  response.send('anybody in there');
  next();
})


app.post('/modernism',function(request,response,next) {
  response.send('THIS IS modernism' + '\n');
  next();
})

app.use('/special/', function(request,response,next) {
  response.send('THIS IS SPECIAL');
  next();
})
