const Product = require("../models/product.model");
const { productVal } = require("../constant/validate");

exports.getProduct = async (req, res) => {
  const pageIndex = parseInt(req.query.pageIndex) - 1 || 0;
  const pageSize = parseInt(req.query.pageSize) || 5;

  try {
    await Product.find({
      product_name: new RegExp(req.query.name, "i"),
    })
      .sort({
        createdAt: "desc",
      })
      .skip(pageIndex * pageSize)
      .limit(pageSize)
      .exec((error, products) => {
        Product.countDocuments((error, count) => {
          if (error)
            return res.status(400).send({
              message: "Lỗi!",
            });
          res.send({
            data: products,
            pageIndex: pageIndex + 1,
            totalPages: Math.ceil(count / pageSize),
            pageSize,
            totalItems: Math.ceil(count),
          });
        });
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getByIdProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Product.findById(id);
    res.send({
      data: response,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createProduct = async (req, res) => {
  const { error } = productVal(req.body);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });
  const productNameExist = await Product.findOne({
    product_name: req.body.product_name,
  });
  if (productNameExist)
    return res.status(400).send({
      message: "Sản phẩm này đã tồn tại!",
    });
  const product = new Product({
    ...req.body,
  });
  try {
    await product.save();
    res.send({
      message: "Tạo sản phẩm thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { error } = productVal(req.body);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });
  try {
    await Product.updateOne(
      { _id: id },
      {
        ...req.body,
      }
    );
    res.send({
      message: "Chỉnh sửa sản phẩm thành công!",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

exports.destroyProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.deleteOne({ _id: id });
    res.send({
      message: "Xóa sản phẩm thành công",
    });
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};
