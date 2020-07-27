const express = require('express');
const app = express();
const path = require("path");
const exphbs = require('express-handlebars');

//app.get('/', function(req, res){
 //  res.send("Hello world!");
//});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'index' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Serves static files (we need it to import a css file)
//app.use(express.static('public'));

//app.get('/', function (req, res) {
//    res.render('main');
//});

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', {layout : 'index'});
   });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});