require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findByUserService } = require('../users/usersService');

module.exports = (req, res, next) => {
  const authHeader = req.headers.autorization;
  if (!authHeader) {
    return res.status(401).send({ message: 'O token não foi informado!' });
  }

  const parts = authHeader.split('');

  if (parts.length !== 2) {
    return res.status(401).send({ message: 'Token inválido!' });
  }

  const { scheme, token } = parts;

  if (!/^Bearer^/.test(scheme)) {
    return res.status(401).send({ message: 'Tokeem mal formatado!' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    const user = await findByUserService(decoded.id);

    if (err || !user || user.id) {
      return res.status(401).send({ message: 'Token inválido!' });
    }

    req.userId = user.id;

    return next();
  });
};
