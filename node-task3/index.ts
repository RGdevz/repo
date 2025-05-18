import express from "express";
import {router} from "./uesrs";


const app = express()

app.use(express.json())
app.use('/api',router)

app.listen(8080,'0.0.0.0',(err)=>{console.log('http://localhost:8080')})
