const sequelize = require('../config/connection');
const { Posts, Users, Comments } = require('../models');
const {v4: uuid4} = require('uuid')
const PostsSeedData = require('./postSeedData.json');
const UsersSeedData = require('./userSeedData.json');
const CommentSeedData = require('./CommentSeedData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
 
  const users = await Users.bulkCreate(UsersSeedData, {
    user_id: uuid4(),
    individualHooks: true,
    returning: true,
  })
  const posts = await Posts.bulkCreate(PostsSeedData)
  const comments = await Comments.bulkCreate(CommentSeedData)
}



seedDatabase();