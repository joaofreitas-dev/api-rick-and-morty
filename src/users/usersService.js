const User = require("./User");

const findByEmailUserService = (email) => User.findOne({ email: email });

const createUserService = (body) => User.create(body);

const findAllUserService = () => User.find();

const findByUserService = (userId) => User.find(userId);

module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserService,
  findByUserService
};
