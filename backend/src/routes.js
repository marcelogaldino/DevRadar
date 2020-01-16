const { Router } = require('express')

const DevController = require('./controller/DevController')
const SearchController = require('./controller/SearchController')

const routes = Router()

// Metodos HTTP: GET, PUT, POST, DELETE

// Tipos de parametros 

// Query Params: req.query (Filtros, ordenacao, paginacao...)
// Route Params: req.params (identificar um recurso na atualizacao ou remocao)
// body: req.body (Dados para criacao, ou alteracao de um registro)

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes