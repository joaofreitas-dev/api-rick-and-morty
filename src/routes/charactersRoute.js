const express = require('express');
const route = express.Router();
const {
  validId,
  validObjectBody,
} = require('../middlewares/charactersMiddleware');

const characterController = require('../controllers/charactersController');

route.get('/characters', characterController.findCharacterController);

route.get(
  '/character/:id',
  validId,
  characterController.findCharacterByIdController,
);

route.post(
  '/create',
  validObjectBody,
  characterController.createCharacterController,
);
route.put(
  '/update/:id',
  validId,
  validObjectBody,
  characterController.updateCharacterController,
);
route.delete(
  '/delete/:id',
  validId,
  characterController.deleteCharacterController,
);


route.get("/search",
characterController.searchCharactersController);






module.exports = route;
