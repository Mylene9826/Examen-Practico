const express = require('express');

const path = require('path');
const app = express();

require('./routes/covid')(app);

// body-parser
app.use(express.urlencoded({
    extended: false
  }));
//app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'));





app.set('port', process.env.PORT || 3000);



app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});