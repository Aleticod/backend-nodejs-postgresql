const { Strategy } = require('passport-local');
const UserService = require('./../../../services/user.service');
const bcrypt = require('bcrypt');

const service = new UserService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await service.findByEmail(email);
      if (!user) {
        done(new Error('Unauthorized'), false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        done(new Error('Unauthorized'), false);
      }
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  },
);

module.exports = LocalStrategy;
