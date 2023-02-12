const router = require('express').Router();
const { Users, Posts, Comments } = require('../../models');


// Use withAuth middleware to prevent access to route
// the user page is going need all the posts that belong to them GET all for that user

//create a new post 
  router.post("/", async (req, res) => {

    console.log(req.body)
    console.log(req.body.title)
    try {
      const PostData = await Posts.create({
        title: req.body.title,
        post_content: req.body.content,
        user_id: req.session.user,
      });
      res.status(200).json(PostData);
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
// if the user wants to edit their post UPDATE
  router.put("/edit", async (req, res) => {
    try {
      const PostData = await Posts.update(req,body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(PostData);
    } catch (error) {
      res.status(400).json(error);
    }
  });


router.delete('/delete', async (req, res) => {
  try {

  } catch (err) {
    res.status(400).json(err);
  }
})
// if the user want to delete one of their posts DELETE - if a post is deleted then the comments will need to also be deleted but

module.exports = router;
