const Gasto = require('../models/Gasto');

const gastoCtrl = {};

// GET todos
gastoCtrl.getGastos = async (req, res) => {
  const gastos = await Gasto.find();
  res.json(gastos);
};

// POST crear
gastoCtrl.createGasto = async (req, res) => {
  const gasto = new Gasto(req.body);
  await gasto.save();
  res.json({ status: 'Gasto guardado' });
};

// GET por ID
gastoCtrl.getGasto = async (req, res) => {
  const gasto = await Gasto.findById(req.params.id);
  res.json(gasto);
};

// PUT actualizar
gastoCtrl.editGasto = async (req, res) => {
  await Gasto.findByIdAndUpdate(req.params.id, req.body);
  res.json({ status: 'Gasto actualizado' });
};

// DELETE eliminar
gastoCtrl.deleteGasto = async (req, res) => {
  await Gasto.findByIdAndDelete(req.params.id);
  res.json({ status: 'Gasto eliminado' });
};

module.exports = gastoCtrl;
