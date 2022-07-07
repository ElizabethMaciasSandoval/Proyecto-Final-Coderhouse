const { readFile, writeFile } = require('../fileManager/fileManager')
// contenedor de productos
class ProductsContainer {

  constructor(){
    this.products = [];
  }

  // obtener todos los productos
  async getAllProducts(){
    this.products = await readFile('productos.txt')
    console.log(this.products)
    return this.products
  }

  // obtener productos por ID
  async getProductById(id){
    this.products = await readFile('productos.txt')
    const product = this.products.filter(element => element.id === id);
    return product
  }

  // agregar producto
  async addProduct(title, description, code, price, thumbnail, stock){
    this.products = await readFile('productos.txt')
    if(this.products.length === 0){
      const product = {
        title,
        description,
        code,
        price, 
        thumbnail,
        timestamp: Date.now,
        stock,
        id:1
      }
      this.products.push(product)
      await writeFile('productos.txt', this.products)
      return product
    }else{
      const lastIndex = this.addProduct[this.products.length - 1].id;
      const index = lastIndex + 1;
      const newProduct = {
        title,
        description,
        code,
        price, 
        thumbnail,
        timestamp: Date.now,
        stock,
        id:index
      }
      this.products.push(newProduct)
      await writeFile('productos.txt', this.products)
      return newProduct
    }
  }

  // actualizar producto
  async updateProduct(id ,title, description, code, price, thumbnail, stock){
    this.products = await readFile('productos.txt')
    const index = this.products.findIndex(product => product.id === id)
    this.products[index].title = title
    this.products[index].description = description
    this.products[index].code = code
    this.products[index].price = price
    this.products[index].thumbnail = thumbnail
    this.products[index].timestamp = Date.now
    this.products[index].stock = stock
  }

  // eliminar producto por ID
  async deleteProductById(id){
    this.products = await readFile('productos.txt')
    const object = this.products.filter(element => element.id != id);
    this.products = object
    await writeFile('productos.txt', this.products)
  }
}

module.exports = {
  ProductsContainer
} 