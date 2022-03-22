const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.session);

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
            console.log(dbPostData[0]);

            const posts = dbPostData.map(post => post.get({ plain: true }));

            res.render('homepage', { posts });
       })
       .catch(err => {
           console.log(err);
           res.status(500).json(err);
       });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;