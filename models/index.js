const Posts = require('./Posts')
const Users = require('./Users')
const userPosts = require('./userPosts')

// What belongs to what
// posts belong to users and users can have many posts



module.exports = { Posts, Users, userPosts}