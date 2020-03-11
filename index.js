/* EJS = Embedded Javascript
   1. NodeJS lookks for ejs files in "views"
   2. ejs files ends with .ejs
   3. Have to let NodeJS engine know that we are using ejs
*/

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {

    res.render("home");
});

var friendList = ["Alice", "Clark", "Bellemy", "Octavia"];
app.get("/friends", function(req,res) {
    res.render("friends", {friends: friendList});
    
});

app.post("/addfriend",function(req,res) {
    var newfriend = req.body.newfriend;
    friendList.push(newfriend);
    res.redirect("/friends");
    
});
// app.post("/removefriend",function(req,res) {
//     var deletefriend = req.body.deletefriend;
//     friendList.remove(deletefriend);
//     res.redirect("/friends");
// })

app.get("*",function(req,res) {
    res.render("error");
});

app.listen(process.env.PORT, function() {
    console.log("Server is up and running");
});