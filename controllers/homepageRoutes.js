const router = require('express').Router();
const { Users, Posts, Comments } = require('../models');
const withAuth = require('../utils/auth');


// need to get all the posts and display on the homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Posts.findAll();

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/signup', (req, res) => {
  res.render('signup')
});

router.get('/profile', async (req, res) => {
  try {
    const postData = await Posts.findAll({
      // where: {
      //     user_id: req.params.user_id,
      // },
    });

    const profilePosts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { 
      profilePosts, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;