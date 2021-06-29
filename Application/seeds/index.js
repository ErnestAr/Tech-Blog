const sequelize = require('../config/connection');
const seedPost = require('./post-data');
const seedUser = require('./user');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedPost();
  process.exit(0);
};

seedAll();
