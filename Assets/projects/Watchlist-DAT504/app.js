const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const JustWatch = require('./script.js');
//const fetch = require('node-fetch');
var path = require('path');
let db;

//Setup data for connection to Datababse
const url = "mongodb://Admin:Admin123@ds255403.mlab.com:55403/watchlist";
const port = 3000;

//Inital setup executing functions
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

//Serve the intial home page
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/home/index.html');
});

//Register a user to the database
app.post('/addUser', function(req, res){
  db.collection("Accounts").insertOne(req.body, function(err, result){
    if (err) throw err;
    console.log("Saved");
    res.redirect('/');
  });
});

//Send login input to database for verifcation
app.post("/login", function(req, res){
  const data = req.body;
  db.collection("Accounts").findOne({Username: data.username}, function(err, document){
    // if err (throw) err;
    if(data.password === document.Password){
      res.redirect('/profile/index.html')
      console.log("login Successful")
    } else {
      res.redirect("/")
    }
  })
})

//Find user account
app.get('/getUser', function(req, res){
  db.collection("Accounts").find().toArray(function(err, result){
      if (err) throw err;
      res.send(result);
  });
});

//Profile page code

//Add movie
app.post('/addMovies', function(req, res){
  db.collection("Movies").insertOne(req.body, function(err, result){
    if (err) throw err;
    console.log("Saved");
    res.redirect('/profile/index.html');
  })
})

//Retrieve movie
app.get('/getMovies', function(req, res){
  db.collection("Movies").find().toArray(function(err, result){
      if (err) throw err;
      res.send(result);
  });
});

//Home page code

//Print api to console
function print_result(name, result)
{
	console.log(name+":");
	console.log(JSON.stringify(result, null, 4));
	console.log("\n\n\n\n");
}

//Post cleaned results to /search (this is the fall back incase of error)
app.post('/search', async function (req, res) {
  console.log('data', req.body.name)
  var justwatch = new JustWatch();
  var userSearch = req.body.name;
  var searchResult = await justwatch.search({query: userSearch});
  const cleanedData = searchResult.items.map((item, index) => {
    return {
      title: item.title,
      cinema_release_date: item.cinema_release_date,
      offers: item.offers,
      runtime: item.runtime + " mintues"
    }
  })
    console.log(cleanedData)
  return res.json(cleanedData)
})

//Connect to Watchlist Datababse
MongoClient.connect(url, function(err, client){
  if (err) throw err;
  console.log("Connection to DB Successful");
  db = client.db("watchlist");
})

//Listen to the port
app.listen(port, function() {
  console.log(`App Listening on Port ${port}`)
})
