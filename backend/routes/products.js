const express = require('express')
const productsHandlers = require('../modules/products')

const productsRouter = new express.Router()

productsRouter.get('/', productsHandlers.findMany)
productsRouter.get('/:id',productsHandlers.findOne)
productsRouter.post('/', productsHandlers.create)
productsRouter.put('/', productsHandlers.update)
productsRouter.delete('/:id', productsHandlers.delete)
productsRouter.post('/rating/:id/:value', productsHandlers.rating)
productsRouter.put('/inventory/:id/:quantity', productsHandlers.inventory)
module.exports= productsRouter
