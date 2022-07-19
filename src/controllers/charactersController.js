const characterService = require('../services/charactersService');



const findCharacterController = async (req, res) => {
  const allCharacter = await characterService.findCharacterService();
  res.send(allCharacter);
};

const findCharacterByIdController = async (req, res) => {
  const idParam = req.params.id;

  const chosenCharacter = await characterService.findCharacterByIdController(
    idParam,
  );

  res.send(chosenCharacter);
};

const createCharacterController = async (req, res) => {
  const character = req.body;

  const newCharacter = await characterService.createCharacterService(character);
  res.status(201).send(newCharacter);
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const characterEdit = req.body;

  const updatedCharacter = await characterService.updateCharacterService(
    idParam,
    characterEdit,
  );

  res.send(updatedCharacter);
};

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;

  await characterService.deleteCharacterService(idParam);

  res.send({ message: 'Personagem deletado com sucesso!' });
};


  const searchCharactersController = async (req, res) => {
  const { name } = req.query;

  const character = await characterService.searchCharacterService(name);

  if (character.length === 0) {
    return res
      .status(400)
      .send({ message: "Não existem personagens com essa mensagem!" });
  }

  return res.send({
    character: character.map((character => ({
      id: character.id,
      user: character.username,    
      name: character.name,
      imageUrl: character.imageUrl
    }))),
  });
};

module.exports = {
  findCharacterController,
  findCharacterByIdController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
  searchCharactersController
};
