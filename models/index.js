const Posts = require('./Posts')
const User = require('./User')
const Comments = require('./Comments')




Posts.belongsTo(User, {
  foreignKey: "user_id"
})

Comments.belongsTo(Posts, {
  foreignKey: "post_id"
})



User.hasMany(Posts);


module.exports = { Posts, User, Comments}


