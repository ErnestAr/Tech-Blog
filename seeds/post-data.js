const { Post } = require('../models');

const postData = [
  {
    title: 'Printemps',
    content: 'test test test test test test test',
    user_id: 1,
    created_at: 'April 20, 2021 07:00:00',
    updated_at: 'June 21, 2021 17:00:00',
  },
  {
    title: 'Sommer',
    content: 'test test test test test test test',
    user_id: 1,
    created_at: 'June 22, 2021 09:00:00',
    updated_at: 'September 22, 2021 22:00:00',
  },
  {
    title: 'Herfst',
    content: 'test test test test test test test',
    user_id: 1,
    created_at: 'September 23, 2021 08:30:00',
    updated_at: 'December 21, 2021 20:30:00',
  },
  {
    title: 'Invierno',
    content: 'test test test test test test test',
    user_id: 1,
    created_at: 'December 22, 2020 11:00:00',
    updated_at: 'March 19, 2021 19:00:00',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
