const Product = require("../models/product.model")

exports.getList = async (req, res) => {
    try {
        const response = await Product.find();
        res.send({
            data: response
        })
    } catch (error) {
        res.status(500).send(error)
    }
}