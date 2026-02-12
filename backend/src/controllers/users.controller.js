const User = require('../models/User');

const userCtrl = {};

// POST → guardar usuario en MongoDB
userCtrl.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ status: 'Usuario guardado' });
};

// GET → listar usuarios guardados
userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

module.exports = userCtrl;
