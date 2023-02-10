const router = require('express').Router();
const { Users, Posts, Comments } = require('../../models');


// Use withAuth middleware to prevent access to route
// the user page is going need all the posts that belong to them GET all for that user

//create a new post

// if the user wants to edit their post UPDATE

// if the user want to delete one of their posts DELETE - if a post is deleted then the comments will need to also be deleted but






module.exports = router;
