const { Router } = require('express');
const router = Router(); 
// importo los controladores
const {} = require('../controllers/productsController')
// rutas de Productos
router.get('/api/productos')
router.get('/api/productos:id')
// rutas de productos acceso solo administrador
router.post('/api/productos')
router.put('/api/productos:id')
router.delete('/api/productos:id')

module.exports = router;