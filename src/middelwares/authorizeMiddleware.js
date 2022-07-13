const authorizeMidelware = (req, res, next) => {
  const administrator = true;
  if(administrator){
    return next()
  }else{
    res.status(401).json({
      error: -1,
      descripcion: `ruta ${rep.url} método ${req.method} no autorizado`
    })
  }
}

module.exports = {
  authorizeMidelware
}