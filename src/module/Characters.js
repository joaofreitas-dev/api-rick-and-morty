const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
});

const Character = mongoose.model('character', CharacterSchema);

module.exports = Character;

