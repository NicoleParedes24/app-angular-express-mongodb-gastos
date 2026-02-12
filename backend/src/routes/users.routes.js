const { Router } = require('express');
const router = Router();

const user = require('../controllers/users.controller');

router.post('/', user.createUser); // guardar
router.get('/', user.getUsers);    // listar

module.exports = router;
