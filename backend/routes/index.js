const express = require('express')

const productsRouter = require('./products')

const router = new express.Router()

router.use('/api/products', productsRouter)

module.exports = router