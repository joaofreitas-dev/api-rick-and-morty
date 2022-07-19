const router = require("express").Router();
const userController = require("./usersController");

router.post("/create", userController.createUserController);
router.get("/", userController.findAllUserController);

module.exports = router;
