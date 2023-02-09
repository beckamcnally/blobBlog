const Posts = require('./Posts')
const Users = require('./Users')
const Comments = require('./Comments')

// posts belong to users and users can have many posts // might also be just belongTO for users

// Users.belongsToMany(Posts, {
//   through: Comments, 
//   foreignKey: "user_id",
//   as: "userPost"
// })


Posts.belongsTo(Users, {
  through: Comments,
  foreignKey: "posts_id",
  as: "userPosts"
})


Posts.hasMany(Comments, { 
  foreignKey: 'posts_id',
  onDelete: 'CASCADE',
})

// comments belong to posts and to users 
Comments.belongsTo(Posts, { 
  foreignKey: 'posts_id',
  as: "postComment",
  onDelete: 'CASCADE',
})
Comments.belongsTo(Users, { 
  foreignKey: 'user_id',
  as: "userComment",
  onDelete: 'CASCADE',
}); 

module.exports = { Posts, Users, Comments}