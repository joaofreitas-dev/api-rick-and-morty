const Character = require('../module/Characters');
const Characters = require('../module/Characters');

const findCharacterService = async () => {
  const characters = await Characters.find();
  return characters;
};

const findCharacterByIdController = async (id) => {
  const character = await Characters.findById(id);
  return character;
};

const createCharacterService = async (newcharacter) => {
  const characterAdd = await Character.create(newcharacter);
  return characterAdd;
};

const updateCharacterService = async (id, characterEdited) => {
  const characterUpdated = await Character.findByIdAndUpdate(
    id,
    characterEdited,
  );
  return characterUpdated;
};

const deleteCharacterService = async (id) => {
  return await Character.findByIdAndDelete(id);
};

const searchCharacterService = (name) =>
  Character.find({
    name: { $regex: `${name || ''}`, $options: 'i' },
  })
    .sort({ _id: -1 })
    .populate('Character');

module.exports = {
  findCharacterService,
  findCharacterByIdController,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
  searchCharacterService
};
