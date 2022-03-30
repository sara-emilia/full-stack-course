var express = require("express");
const { get } = require("http");
var app = express();

var data = {
  users: [
    { name: "John", age: 25 },
    { name: "Mike", age: 23 },
    { name: "Samantha", age: 54 },
  ],
};

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/index", {
    new_heading: "This was passed from JS file",
    new_paragraph: "Lorem ipsum..",
    new_footer: "New footer from JS",
  });
});

app.get("/users", function (req, res) {
  res.render("pages/users", data);
});

app.listen(8081);
console.log("8081 is the magic port");
