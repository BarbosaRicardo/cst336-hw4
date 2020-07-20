const express = require('express');
var faker = require('faker')
const app = express();

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
   let phrase = {catchPhrase: faker.company.catchPhrase()}
   res.render("index.ejs", phrase);
});//routes

app.get("/java", function(req,res){
   res.render("java.html");
});//GET mercury

app.get("/node", function(req,res){
   res.render("node.html");
});//GET venus

app.get("/python", function(req,res){
   res.render("python.html")
});//GET earth

//variables 
const port = 4000

//starting server
app.listen(process.env.PORT || port, process.env.IP, () => {
   console.log("Express server is running...")
}); 