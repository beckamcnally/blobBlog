const router = require('express').Router();
const { User, Posts, Comments } = require('../../models');
// const withAuth = require('../utils/auth');

//when a new user signs up their info needs to be saved Post
router.post('/signUp', async (req, res) => {
  try {
     const userData = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
     });
     const data = userData.get({ plain: true });
     req.session.save(() => {
        req.session.user = data.id;
        req.session.username = data.name;
        req.session.loggedIn = true;

        res.status(200).json(userData);
     });
  } catch (err) {
     console.log(err);
     res.status(500).json(err);
  }
});

// user needs to login 
router.post('/login', async (req, res) => {
  console.log('made it to /api/user/login router')
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    // const data = userData.get({ plain: true });
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = userData.name;
      req.session.user_id = userData.id;

      res
        .status(200)
        .json({ user: userData, message: 'You are now logged in!' });

        console.log(req.session.user_id )
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // user can log out
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// if user deletes their account their info is removed Delete
module.exports = router;
