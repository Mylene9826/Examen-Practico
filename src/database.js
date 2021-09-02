const mysql= require('mysql');

const mysqlConec = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'covid'
});

mysqlConec.connect(function(err){
    if (err){
        console.log(err);
        return;
    }else {
        console.log('DB is connected');
    }
});
module.exports= mysqlConec;