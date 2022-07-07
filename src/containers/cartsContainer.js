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
    this.carts = await readFile('carritos.txt')
    const object = this.carts.filter(element => element.id != id)
    this.carts = object
    await writeFile('carrito.txt', this.carts)
  }

  // listar productos por ID de carrito
  async listPorductsByCartId(id){
    this.carts = await readFile('carritos.txt')
    const cart = this.carts.filter(element => element.id === id)
    return cart
  }

  // agregar producto por ID
  async addProductById(id, product){
    this.carts = await readFile('carritos.txt')
    const index = this.carts.findIndex(element => element.id === id)
    this.carts[index].product.push(product)
    await writeFile('carrito.txt', this.carts)

  }

  // eliminar producto por ID de carrito y por ID de producto
  async deleteProductById(id, idProduct){
    this.carts = await readFile('carritos.txt')
    const index = this.carts.findIndex(element => element.id === id);
    const object = this.carts[index].products.filter(element => element.id != idProduct)
    this.carts[index].products = object
    await writeFile('carrito.txt', this.carts)
  }
} 

module.exports = {
  ContainerCarts
}