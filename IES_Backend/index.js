import express from "express";
import mysql from "mysql";
import cors from 'cors';



const db= mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'Deepak1234',
    database:'notes'
})

const app=express();
app.use(cors());
app.use(express.json());





app.get("/Travel",(req,res)=>{
    const q="SELECT * FROM notes.travels";

    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.listen('8800',()=>{
    console.log("You are Connected");
})  


