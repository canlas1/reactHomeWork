const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const PORT = 3000 || process.env.PORT;

//use morgan logger and bodyparser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Serves static content for the app from the "public" directory
app.use(express.static(process.cwd() + "/public"));

const Article = require("./models/Article.js");

//mongoose connection
let db = mongoose.connection;

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(`mongodb://localhost/dennisReactHomeWork`);
}

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

//these are the routes!


// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// // Route to get all saved articles
// app.get("/api/saved", function(req, res) {

//   Article.find({})
//     .exec(function(err, doc) {

//       if (err) {
//         console.log(err);
//       }
//       else {
//         res.send(doc);
//       }
//     });
// });

// Route to add an article to saved list
app.post("/api/saved", function(req, res) {
  var newArticle = new Article(req.body);

  console.log(req.body);

  newArticle.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});


// // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

// Starting our express server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
