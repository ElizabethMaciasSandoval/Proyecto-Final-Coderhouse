// importo el contenedor de carritos
const contenedorCarritos = require('../containers/cartsContainer')
// importo el contenedor de productos
const contenedorProductos = require('../containers/productsContainer')
// creo una nueva instancia de carritos
const carts = new contenedorCarritos.ContainerCarts();
// creo nueva instancia de productos
const products = new contenedorProductos.ProductsContainer();

// creo un nuevo carrito
const createCart = async (req, res) => { 
  const newCart = await carts.createCart();
  res.status(201).json(newCart)
}

// elimino carrito por su ID
const deleteCartById = async (req, res) => {
  const id = Number(req.params.id);
  const cartById = await carts.getCartById(id);
  if(isNaN(id)){
    return res.status(400).json({error: 'El parámetro no es un número'})
  }
  if(!cartById){
    return res.status(404).json({error: 'El carrito que deseas eliminar no existe'})
  }
  await carts.deleteCartById(id)
  res.sendStatus(204)
}

// obtengo lista de productos por ID de carrito
const listProductsByIdToCart = async (req, res) => {
  const idCart = Number(req.params.id);
  const listProducts = await carts.listProductsByIdToCart(idCart);
  if(isNaN(idCart)){
    return res.status(400).json({error: 'El parámetro no es un número'})
  }
  if(!listProducts){
    return res.status(404).json({error: 'Los productos del carrito no fueron encontrados'})
  }
  res.status(200).json(listProducts)
}

// agrego producto a carrito 
const addProductById = async (req, res) => {
  // obtenemos los ID de carrito y producto
  const idCart = Number(req.params.id);
  const {id} = req.body;
  // comprobamos que el ID de carrito sea un número
  if(isNaN(idCart)){
    return res.status(400).json({error: 'El parámetro no es un número'})
  }
  // obtenemos el carrito con el ID de carrito
  const cartById = await carts.getCartById(idCart);
  // comprobamos si el carrito existe
  if(!cartById){
    return res.status(404).json({error: 'El carrito no existe'})
  }
  // obtenemos el producto por el ID de producto
  const productById = await products.getProductById(id);
  const product = productById[0];
  // comprobamos que el ID del producto sea un número y que el producto exista
  if(isNaN(id) || productById.length === 0){
    return res.status(404).json({error: 'El producto no existe'})
  }
  // agregamos el producto
  res.status(201).json(await carts.addProductById(idCart, product))
}

// elimino producto por ID
const deleteProductOfCartById = async (req, res) => {
  const idCard =  Number(req.params.id);
  const idProduct = Number(req.params.id_prod);
  const productDelete = await products.getProductById(idProduct);
  if(isNaN(idCard)){
    return res.status(400).json({error: 'El parámetro no es un número'})
  }
  if(isNaN(idProduct || productDelete.length === 0)){
    return res.status(404).json({error: 'El producto no existe'})
  }
  await carts.deleteProductOfCartById(idCard, idProduct)
  res.status(204)
}

module.exports = {
  createCart,
  deleteCartById,
  listProductsByIdToCart,
  addProductById,
  deleteProductOfCartById
}