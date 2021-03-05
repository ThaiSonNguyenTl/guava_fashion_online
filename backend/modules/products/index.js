
const productModel = require('./model')

const handlers = {
    async findMany(req, res, next) {
        try {
            let { gender = '' } = req.query
            console.log(gender)
            let condition = {}
            if (gender) {
                condition.gender = gender
            }
            let items = await productModel.find(condition).exec()
            res.json(items)
        } catch (err) {
            next(err)
        }
    },
    async findOne(req, res, next) {
        try {
            let id = req.params.id
            let item = await productModel.findById(id)
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async create(req, res, next) {
        try {
            let data = req.body
            let item = await productModel.create(data)
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async update(req, res, next) {
        try {
            let id = req.body._id
            let data = req.body
            if (!id) {
                throw new Error(`Require 'id' to update`)
            }
            let item = await productModel.findByIdAndUpdate(id, data, { new: true })
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async delete(req, res, next) {
        try {
            let id = req.params.id
            let item = await productModel.findByIdAndDelete(id)
            res.send(item)
        } catch (err) {
            next(err)
        }
    },
    async rating(req ,res){
        let id = req.params.id;
        let value = parseInt(req.params.value);
        // console.log(id , value)
        await productModel.findOneAndUpdate({ _id: id },{ $push: { rating: value } });
        res.status(200).send('done!')
    },
    async inventory(req, res) {
        let id = req.params.id;
        let quantityOrder = req.params.quantity;
        let product = await productModel.findOne({ _id: id });
        let quantity = parseInt(product.inventory) - parseInt(quantityOrder)
        if (quantity < 0) quantity == 0
        await productModel.findOneAndUpdate({ _id: id }, { $set: { inventory: quantity } })
        res.status(200).send('done !')
    }
}

module.exports = handlers

