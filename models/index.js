const Posts = require('./Posts')
const Users = require('./Users')
const Comments = require('./Comments')

// posts belong to users and users can have many posts // might also be just belongTO for users
Users.belongsToMany(Posts, {through: Comments, foreignKey: "user_id"})
Posts.belongsToMany(Users, {through: Comments, foreignKey: "posts_id"})
// comments belong to posts and to users 
Comments.belongsTo(Posts, { 
  foreignKey: 'posts_id',
  onDelete: 'CASCADE',
})
Comments.belongsTo(Users, { 
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
}); 

module.exports = { Posts, Users, userPosts}