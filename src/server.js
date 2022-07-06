require('dotenv').config()
const express = require('express');
const app = express();
const puerto = process.env.PORT || 8080;
const productsRouter = require('./routes/productsRouter')
const cartsRouter = require('./routes/cartsRouter')
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/productos", productsRouter);
app.use("/api/carrito", cartsRouter);

app.listen(puerto, error => {
  if(error){
    console.log(`Se produjo un error ${error}`)
  }else{
    console.log(`Servidor escuchando puerto: ${puerto}`)
  }
})