const router = require('express').Router();
const { Post } = require('../../models');

// GET one post

router.post('/', async (req, res) => {
    // create a new Post
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        })
            res.json(newPost);
    } catch (error) {
      res.json(err);
  }

  });

  
router.put('/:id', async (req, res) => {
    // update a Post by its `id` value
    try {
      const postData = await Post.update( 
        { 
          title: req.body.title,
          content: req.body.content
    },
        { where: {id: req.params.id  } }
      )
      res.status(200).json(postData);
    } catch (error) {
      res.status(400).json(error);
    }

  });

  router.delete('/:id', async (req, res) => {
    // delete a Post by its `id` value
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

  });


module.exports = router;