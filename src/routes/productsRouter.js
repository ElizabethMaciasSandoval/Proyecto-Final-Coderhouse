const { Router } = require('express');
const router = Router(); 
// importo los controladores
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProductById } = require('../controllers/productsController')
// middleware para autorizar a administrador
const { authorizeMidelware } = require('../middelwares/authorizeMiddleware')
// rutas de Productos
router.get('/', getAllProducts)
router.get('/:id', getProductById)
// rutas de productos acceso solo administrador
router.post('/', authorizeMidelware, addProduct)
router.put('/:id', authorizeMidelware, updateProduct)
router.delete('/:id', authorizeMidelware, deleteProductById)

module.exports = router;