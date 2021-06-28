const router = require('express').Router();
const { Post } = require('../models');

// GET all post for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
    });

    const post = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
