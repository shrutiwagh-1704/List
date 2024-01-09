import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import routes from './routes/route.js';
import bodyParser from 'body-parser';

const app=express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',routes);


const PORT=8000;

Connection();

app.listen(PORT,()=>console.log(`Your connection is done ${PORT}`))