const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

// get db 
const pool = require('./db');

// use middleware 
app.use(cors());
app.use(express.json());


// routes

// add company

app.post("/addCompany",async(req,res)=>{

    console.log(req.body);
    const {company_id, company_name} = req.body;
    const new_company = await pool.query('INSERT INTO COMPANY(company_id,company_name) VALUES($1,$2) RETURNING *',[company_id,company_name],(err,result)=>{
        if(err){
            throw err;
        }
        console.log(new_company);
        res.status(200).send(result);
    });

});



// get company's list

app.get("/getCompany",async(req,res)=>{

    console.log(req.body);
    const company_list = await pool.query('SELECT * FROM COMPANY ',(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result.rows);
    });

});


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port no: ${port}`);

});

