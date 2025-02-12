const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

const {logger,auth} = require('./middlewares.js')

app.use(logger)




app.get('/',(req,res)=>{
  

  res.send('ברוכים הבאים לדף הבית!')

})



app.get('/admin',auth,(req,res)=>{

  res.send('ברוכים הבאים לעמוד הניהול!')

})


app.get('/public',(req,res)=>{

  res.send('זהו דף ציבורי.')

})

app.listen(5000,()=>{
    console.log(`http://localhost:5000`)
})