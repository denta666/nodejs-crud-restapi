const Product = require('../models/productModel');

exports.getAll = (req, res) => {
  Product.getAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.getById = (req, res) => {
  Product.getById(req.params.id, (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

exports.create = (req, res) => {
  Product.create(req.body, (err, results) => {
    if (err) throw err;
    res.json({ message: 'Produk berhasil dibuat', id: results.insertId });
  });
};

exports.update = (req, res) => {
  Product.update(req.params.id, req.body, (err) => {
    if (err) throw err;
    res.json({ message: 'Produk berhasil diupdate' });
  });
};

exports.delete = (req, res) => {
  Product.delete(req.params.id, (err) => {
    if (err) throw err;
    res.json({ message: 'Produk berhasil dihapus' });
  });
};
