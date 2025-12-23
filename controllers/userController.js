const User = require('../models/userModel');

exports.getAll = (req, res) => {
  User.getAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.getById = (req, res) => {
  User.getById(req.params.id, (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

exports.create = (req, res) => {
  User.create(req.body, (err, results) => {
    if (err) throw err;
    res.json({ message: 'User berhasil dibuat', id: results.insertId });
  });
};

exports.update = (req, res) => {
  User.update(req.params.id, req.body, (err) => {
    if (err) throw err;
    res.json({ message: 'User berhasil diupdate' });
  });
};

exports.delete = (req, res) => {
  User.delete(req.params.id, (err) => {
    if (err) throw err;
    res.json({ message: 'User berhasil dihapus' });
  });
};