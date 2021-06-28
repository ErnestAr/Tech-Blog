const router = require('express').Router();
const { Post } = require('../models');


// GET all post for homepage
router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
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

  
// GET one post
router.get('/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, allow them to view the post
      try {
        const dbpostData = await Post.findByPk(req.params.id, {

        });
        const post = dbpostData.get({ plain: true });
        res.render('post', {post, loggedIn: req.session.loggedIn});
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  });

  
router.post('/', async (req, res) => {
    // create a new Post

    try {
      if (!req.session.loggedIn) {
        res.redirect('/login');
      } else {
        const newPost = await Post.create({
            title: req.body.title,
            user: req.session.User,
            post_date: req.body.post_date,
            content: req.body.content,
        })
            res.json(newPost);
    }
    } catch (error) {
      res.json(err);
    }

  });

  
router.put('/:id', async (req, res) => {
    // update a Post by its `id` value
    if (!req.session.loggedIn) {
        res.redirect('/login');
      } else {
    try {
      const postData = await Post.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      res.status(200).json(PostData);
    } catch (error) {
      res.status(400).json(error);
    }
}
  });

  router.delete('/:id', async (req, res) => {
    // delete a Post by its `id` value
    if (!req.session.loggedIn) {
        res.redirect('/login');
      } else {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
        },
      })
      res.status(200).json(postData);
    } catch (error) {
      res.status(400).json(error);
    }
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
  