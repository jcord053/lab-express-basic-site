const express = require('express')
const app = express()

app.use(express.static('public'))



app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.get('/home', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/home.html');
  });
  

  app.get('/about', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/about.html');
  });


  app.get('/works', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/works.html');
  });

  app.get('/photo-gallery', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/photo-gallery.html');
  });




app.listen(3000, () => (console.log('app is running')))