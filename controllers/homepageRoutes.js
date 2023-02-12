const router = require('express').Router();
const { Users, Posts, Comments } = require('../models');
const withAuth = require('../utils/auth');


// get all the posts by all the users to display on the home page
router.get('/', async (req, res) => {
  try {
    const postData = await Posts.findAll(
    //   {
    // } not getting the user I think there might be something in the relationships
    );
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts)
    res.render('homepage', { 
      posts, 
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});


router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/signup', (req, res) => {
  res.render('signup')
});

// on dashboard display all user 
// router.get('/dashboard', withAuth, async (req, res) => {
//   console.log('got into dashboard')
//   try {
//     const postData = await Posts.findAll({
//       where: {
//           user_id: req.params.user_id,
//       },
//     });
// console.log(profilePosts)
//     const profilePosts = postData.map((post) => post.get({ plain: true }));
// console.log(profilePosts)
//     res.render('dashboard', { 
//       profilePosts, 
//       loggedIn: req.session.loggedIn 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


module.exports = router;