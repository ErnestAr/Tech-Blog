const router = require('express').Router();

const userRoutes = require('./user-routes');
const formRoutes = require('./formcreate-routes');

router.use('/users', userRoutes);
router.use('/posts', formRoutes);


module.exports = router;
