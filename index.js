const express         = require('express');
const app             = express();
const port            = 8001;
const expressLayout   = require('express-ejs-layouts');
const db              = require('./config/mongoose');
const cookieParser    = require('cookie-parser');


app.use(express.urlencoded());
// use route express
app.use(express.static('assets'));
app.use(expressLayout);
//app.set('layout extractStyles', true);
app.use(cookieParser());
app.use('/',require('./routes'));

// set up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in running server : ${port}`);
    }
       console.log(`server is running in port : ${port}`);
});