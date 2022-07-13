const { Router } = require('express');
const router = Router(); 
// importo los controladores
const { createCart, deleteCartById, listProductsByIdToCart, addProductById, deleteProductOfCartById } = require('../controllers/cartsController')
// rutas de Carrito
router.post('/', createCart)
router.delete('/:id', deleteCartById)
router.get('/:id/productos', listProductsByIdToCart)
router.post('/:id/productos', addProductById)
router.delete('/:id/productos/:id_prod', deleteProductOfCartById)

module.exports = router;