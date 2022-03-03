const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
   Post.findAll({
       attributes: [
           'id',
           'post_url',
           'title',
           'created_at',
           [sequelize.literal('(SELECT COUNT(*) from VOTE WHERE post.id = vote.post_id)'), 'vote_count']
       ],
       include: [
           {
               model: Comment,
               attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
               include: [
                   {
                       model: User,
                       attributes: ['username']
                   }
               ]
           },
           {
               model: User,
               attributes: ['username']
           }
       ]
   })
       .then(dbPostData => {
            // render the post data to the homepage through the res.render method
            res.render('homepage', dbPostData[0])
       })
       .catch(err => {
           console.log(err);
           res.status(500).json(err);
       });
});

module.exports = router;