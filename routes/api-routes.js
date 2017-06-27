const Article = require("../models/Article.js");
const request = require('request');

module.exports = function(app) {

    // Route to get all saved articles
    app.get("/api", function(req, res) {
        console.log(req.body);
        console.log("DENNIS TEST Title BODY: " + req.body.title);
        console.log("DENNIS TEST Date BODY: " + req.body.date);
        console.log("DENNIS TEST link BODY: " + req.body.link);


        Article.find({})
            .exec(function(err, doc) {

                if (err) {
                    console.log(err);
                } else {
                    res.send(doc);
                }
            });
    });

    // Route to add an article to saved list
    app.post("/api/saved", function(req, res) {
        const newArticle = new Article(req.body);


        console.log(req.body);

        console.log("=======================")
        console.log("THIS IS MY NEW ARTICLE: " + newArticle)
        console.log("=======================")

        newArticle.save(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    });

    app.delete("/api/saved/", function(req, res) {

        const url = req.param("url");
        console.log("url")
        console.log("=======================")


        Article.find({ link: link }).remove().exec(function(err) {
            if (err) {
                console.log(err);
            } else {
                res.send("Deleted");
            }
        });
    });

}
