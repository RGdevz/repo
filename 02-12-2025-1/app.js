const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

   const products = [
   { "id": 1, "name": "Laptop", "type": "Electronics" },
   { "id": 2, "name": "Chair", "type": "Furniture" },
   { "id": 3, "name": "Smartphone", "type": "Electronics" },
   { "id": 4, "name": "Table", "type": "Furniture" },
   { "id": 5, "name": "Headphones", "type": "Accessories" }
  ]


  const users  = [
    { "name": "Alice", "age": 25 },
    { "name": "Bob", "age": 30 },
    { "name": "Charlie", "age": 22 },
    { "name": "David", "age": 28 },
    { "name": "Emma", "age": 35 }
]


//app.use(express.json())


app.get('/api/products',(req,res)=>{


return res.json(products)

}
)




   app.get('/api/products/:id',(req,res)=>{

    const id = Number(req.params.id)
    if (isNaN(id)) return res.status(404).send('product not found ')

    const find = products.find(x=>x.id == id)
    
    if (!find) return res.status(404).send('product not found ')

    return res.json(find)
    
    }
    )




    app.get('/api/users',(req,res)=>{

        const {age} = req.query

        if (!age){
          return res.json(users)
        }

        
        const older = users.filter(x=>x.age > age)

        return res.json(older)

    }
)




app.use(express.static(__dirname +'/public'))

app.use((req,res,next)=>{

 const html = fs.readFileSync(path.join(__dirname,'public','404.html'),'utf-8')

res.status(404).send(html)

})

app.listen(5000,()=>{
    console.log(`http://localhost:5000`)
})