const express = require('express');
const route = express.Router();
const { validId, validObjectBody } = require('../middlewares/charactersMiddleware');

const characterController = require('../controllers/charactersController');

route.get('/characters', characterController.findcharacterController);

route.get('/character/:id', validId, characterController.findcharacterByIdController);

route.post('/create', validObjectBody, characterController.createcharacterController);
route.put('/update/:id', validId, validObjectBody, characterController.updatecharacterController);
route.delete('/delete/:id', validId, characterController.deletecharacterController);

module.exports = route;

