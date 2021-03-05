const mongoose = require('mongoose')
const productSchema = require('./schema')

const COLLECTION_NAME = 'PRODUCTS'
const MODEL_NAME = 'PRODUCTS'
const productModel = mongoose.model(MODEL_NAME, productSchema, COLLECTION_NAME)
module.exports = productModel