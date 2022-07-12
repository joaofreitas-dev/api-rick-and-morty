const Character = require('../module/Characters');
const Characters = require('../module/Characters');

const findcharacterService = async () => {
  const characters = await Characters.find();
  return characters;
};

const findcharacterByIdController = async (id) => {
  const character = await Characters.findById(id);
  return character;
};

const createcharacterService = async (newcharacter) => {
  const characterAdd = await Character.create(newcharacter);
  return characterAdd;
};

const updatecharacterService = async (id, characterEdited) => {
  const characterUpdated = await Character.findByIdAndUpdate(
    id,
    characterEdited,
  );
  return characterUpdated;
};

const deletecharacterService = async (id) => {
  return await Character.findByIdAndDelete(id);
};

module.exports = {
  findcharacterService,
  findcharacterByIdController,
  createcharacterService,
  updatecharacterService,
  deletecharacterService,
};
