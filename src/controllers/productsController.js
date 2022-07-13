// importo el contenedor
const container = require('../containers/productsContainer');
// creo una nueva instancia 
const products = new container.ProductsContainer();

// obtengo todos productos
const getAllProducts = async (req, res) => {
  const allProducts = await products.getAllProducts();
  res.status(200).json(allProducts)
}

// obtengo producto por ID
const getProductById = async (req, res) => {
  const id = Number(req.params.id);
  const productById = await products.getProductById(id);
  if(isNaN(id)){
    return res.status(400).json({error: 'El parámetro no es un número'})
  }
  if(!productById.length){
    return res.status(404).json({error: 'El producto no existe'})
  }
  res.status(200).json(productById)
}

// creo nuevo producto
const addProduct = async (req, res) => { 
  const { title, description, code, price, thumbnail, stock } = req.body
  await products.addProduct(title, description, code, price, thumbnail, stock);
  res.sendStatus(201)
}

// actualizo un producto por su ID
const updateProduct = async (req, res) => {
  const { title, description, code, price, thumbnail, stock } = req.body
  const id =  Number(req.params.id);
  const productById = await products.getProductById(id);
  if(isNaN(id)){
    return res.status(400).json({error: 'El parámetro no es un número'})
  }
  if(!productById.length){
    return res.status(404).json({error: 'El producto que deseas actualizar no existe'})
  }
  await products.updateProduct(id, title, description, code, price, thumbnail, stock)
  res.sendStatus(204)
}

// elimino un producto
const deleteProductById = async (req, res) => { 
  const id =  Number(req.params.id);
  const productById = await products.getProductById(id);
  if(isNaN(id)){
    return res.status(400).json({error: 'El parámetro no es un número'})
  }
  if(!productById.length){
    return res.status(404).json({error: 'El producto que deseas eliminar no existe'})
  }
  await products.deleteProductById(id)
  res.sendStatus(204)
}
module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProductById
}