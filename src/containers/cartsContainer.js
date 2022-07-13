const { readFile, writeFile } = require('../fileManager/fileManager')
// contenedor de carrito
class ContainerCarts{

  constructor(){
    this.carts = [];
  }

  // crear carrito
  async createCart(){
    this.carts = await readFile('carritos.txt')
    if(this.carts.length === 0){
      const cart = {
        id: 1,
        timestamp: Date.now,
        products: []
      }
      this.carts.push(cart)
      await writeFile('carritos.txt', this.carts)
      return cart
    }else{
      const lastIndex = this.carts[this.carts.length - 1].id;
      const index = lastIndex + 1;
      const newCart =  {
        id: index,
        timestamp: Date.now,
        products: []
      }
      this.carts.push(newCart)
      await writeFile('carritos.txt', this.carts)
      return newCart
    }

  }

  // eliminar carritopor ID
  async deleteCartById(id){
    try{
      this.carts = await readFile('carritos.txt')
      const object = this.carts.filter(element => element.id != id)
      this.carts = object
      await writeFile('carrito.txt', this.carts)
    }catch(error){
      console.log(error)
    }
  }

  // obtener todos los carritos 
  async getAllCarts () {
    try{
      this.carts = await readFile('carrito.txt')
      return this.carts
      
    }catch(error){
      console.log(error)
    }
  }

  // obtener carrito por su ID
  async getCartById () {
    try {
      this.carts = await readFile('carritos.txt')
      const cart = this.carts.filter(element => element.id === id);
      return cart
    }catch(error){
      console.log(error)
    }
  }

  // obtener lista de productos del carrito por su ID
  async listProductsByIdToCart(id){
    try{
      this.carts = await readFile('carritos.txt')
      const cart = this.carts.filter(element => element.id === id);
      const products = cart.products;
      return products
    }catch(error){
      console.log(error)
    }
  }

  // agregar producto por ID
  async addProductById(id, product){
    try{
      this.carts = await readFile('carritos.txt')
      const index = this.carts.findIndex(element => element.id === id)
      this.carts[index].product.push(product)
      await writeFile('carrito.txt', this.carts)
    }catch(error){
      console.log(error)
    }
  }

  // eliminar producto por ID de carrito y por ID de producto
  async deleteProductOfCartById(idCart, idProduct){
    try {
      this.carts = await readFile('carritos.txt')
      const index = this.carts.findIndex(element => element.id === idCart);
      const object = this.carts[index].products.filter(element => element.id != idProduct)
      this.carts[index].products = object
      await writeFile('carrito.txt', this.carts)
    }catch(error){
      console.log(error)
    }
  }
} 

module.exports = {
  ContainerCarts
}