const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all post for homepage
router.get('/', withAuth,  async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
      const posts = dbPostData.map((post) =>
        post.get({ plain: true })
      );
      res.render('dashboard', {
        posts,
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/form',   async (req, res) => {
    try {
      res.render('addform', {});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  router.get('/form/:id',   async (req, res) => {
    try {
      const PostData = await Post.findByPk(req.params.id);
      const post = PostData.get({ plain: true });
      res.status(200).json(post)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

  });

  router.get('/form/:id/update',   async (req, res) => {
    try {
      const PostData = await Post.findByPk(req.params.id);
      const post = PostData.get({ plain: true });
      res.status(200).render("update-delete", {
        post
      })

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
  