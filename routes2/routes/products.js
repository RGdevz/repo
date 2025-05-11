const express = require('express');
const router = express.Router();

const data = require('../data');


router.get('/', (req, res) => {
  res.json(data);
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  const chosenProduct = data.products.find(x => x.id == id);

  if (chosenProduct) return res.json(chosenProduct);
  return res.status(404).send("There isn't products with the given id");
});





router.post('/', (req, res) => {
  let { id, name, price ,stock} = req.body;

  price = Number(price)
  stock = parseInt(stock)

  const sendError = msg =>{
    res.status(404).send(msg)
  }

  if (isNaN(Number(id))){
    sendError(`id missing or not a number`)
    return
  }

  if (data.products.find(x=>x.id == id)){
    sendError(`product with the id ${id} already exsits`)
    return
  }

  if (name == undefined || isNaN(price) || isNaN(stock)){
    sendError(`missing paramaters (need name,price,stock)`)
    return
  }

  if (price <= 0){
   sendError('price must positive and above 0')
   return
  }

  if (stock < 0){
    sendError('stock must be positive')
    return
  }

  data.products.push({ id, name, price,stock });

  res.status(201).json({
    message: 'The product has been successfully added',
  });

});



router.put('/:id', (req, res) => {
  let { name,price,stock} = req.body;

  const sendError = msg =>{
    res.status(404).send(msg)
  }

  
  price = Number(price)
  stock  = parseInt(stock)

  if (name == undefined || isNaN(price)  || isNaN(stock)){
   sendError('missing paramaters (need name,price,stock)')
  }

  const id = parseInt(req.params.id);

  if (isNaN(id)){
    sendError('no id param')
    return
  }

  const product = data.products.find(x => x.id == id);

  if (!product){
   sendError('product not found')
   return
  }


    if (price <= 0){
      return res.status(404).json({ message: 'error', data: 'new price cant be <= 0' });
    }

    if (stock < 0){
      return res.status(404).json({ message: 'error', data: 'stock number must be positive' });
    }
  

    product.name = name 
    product.price = price 
    product.stock = stock
     
    return res.json({ message: 'product updated' });
  
 
});




router.delete('/:id', (req, res) => {
  let { id } = req.params;

  id = parseInt(id)

  if (isNaN(id)) {
    return res.status(404).json({ message: 'no id' });
  }

  const find = data.products.findIndex(x => x.id == id);
  if (find == -1) return res.status(404).json({ message: 'product not found' });

  data.products.splice(find, 1);

  return res.status(200).json(data);
}
);


module.exports = router;
