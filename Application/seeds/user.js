const { User } = require('../models');


const UserData = [
    {
      username: 'Ernest',
      email: 'ernest@gmail.com',
      password: 'ernest123'
    }
]
const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;
