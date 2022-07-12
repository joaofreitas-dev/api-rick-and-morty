const characterService = require('../services/charactersService');

const mongoose = require('mongoose');

const findcharacterController = async (req, res) => {
  const allItems = await characterService.findcharacterService();
  res.send(allItems);
};

const findcharacterByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenItems = await characterService.findcharacterByIdController(
    idParam,
  );

  res.send(chosenItems);
};

const createcharacterController = async (req, res) => {
  const item = req.body;

  const newItem = await characterService.createcharacterService(item);
  res.status(201).send(newItem);
};

const updatecharacterController = async (req, res) => {
  const idParam = req.params.id;
  const itemEdit = req.body;

  const updatedItem = await characterService.updatecharacterService(
    idParam,
    itemEdit,
  );

  res.send(updatedItem);
};

const deletecharacterController = async (req, res) => {
  const idParam = req.params.id;

  await characterService.deletecharacterService(idParam);

  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  findcharacterController,
  findcharacterByIdController,
  createcharacterController,
  updatecharacterController,
  deletecharacterController,
};
