const Category = require('../models/categoryModel');

exports.getAll = (req, res) => {
  Category.getAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.getById = (req, res) => {
  Category.getById(req.params.id, (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

exports.create = (req, res) => {
  Category.create(req.body, (err, results) => {
    if (err) throw err;
    res.json({ message: 'Kategori berhasil dibuat', id: results.insertId });
  });
};

exports.update = (req, res) => {
  Category.update(req.params.id, req.body, (err) => {
    if (err) throw err;
    res.json({ message: 'Kategori berhasil diupdate' });
  });
};

exports.delete = (req, res) => {
  Category.delete(req.params.id, (err) => {
    if (err) throw err;
    res.json({ message: 'Kategori berhasil dihapus' });
  });
};
