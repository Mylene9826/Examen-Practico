const express = require('express');
const router = express.Router();

const mysqlConec= require('../database');

module.exports = app =>{
    app.get('/', (req, res) =>{
        mysqlConec.query('SELECT * FROM `datasets-worldometer` ORDER BY TotalCases asc limit 5',(err,result)=>{
            console.log(result);
            res.render('../views/new',{
                arr: result
            });

        });

    });
    app.get('/', (req, res) =>{
        mysqlConec.query('SELECT Fridge, time FROM lectura ORDER BY  Fridge desc limit 20;',(err,result)=>{
            console.log(result);
            res.render('../views/new',{
                arre: result
            });

        });

    });
    app.post('/', (req ,res)=>{
        
        console.log(req.body);

        


    });
}


//module.exports = router;