const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const formRoutes = require('./create-routes.js');

router.use('/users', userRoutes);


router.use('/posts', formRoutes);


module.exports = router;
