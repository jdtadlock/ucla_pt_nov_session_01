var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ucla_01'
});

db.connect();

var app = express();

// console.log(path.join(__dirname, 'views/index.html'));

// Body Parser makes it easy to get the information from a form submission in the browser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Give the front end access to some files
app.use(express.static(path.join(__dirname, 'public')));


// Routes
// localhost:3000/ <-- Root URL(route)
app.get('/', function(request, response) {
  // response.send({
  //   message: 'Hey there!'
  // })

  response.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/notes', function(request, response) {
  db.query('SELECT * FROM notes', function (err, notes) {
    if (err) return console.log(err);

    response.send({data: notes});
  });
});

app.post('/info', function(request, response) {
  // console.log(request.body);

  db.query('INSERT INTO notes SET ?', request.body, function(err, result) {
    if ( err ) return console.log(err);
    
    response.redirect('/');
  });
});

// Start the server
app.listen(3000, function() {
  console.log('Listening on port 3000');
});





























// function test(str) {
//   // ran when the function is called
//   console.log(str);
// }

// test('some string');




// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// var jd = new Person('JD', 38);
