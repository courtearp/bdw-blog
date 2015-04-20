// ARTICLE CONTROLLER


var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  posts = require('../../config/posts');

module.exports = function (app){
  app.use('/article', router);
};  

router.get('/', function (req, res, next){

  // find all articles in the mongo db
  Article.find({}, function(err, articles){

    res.render('article/list',{ // REMINDER: render (html) vs. send (json)
      title: 'BDW - Blog',
      articles: articles // return all articles to the list.swig
    });

  });

});


//GET http://localhost:3000/article - show article
router.get('/:id', function (req, res, next){

  var id = req.params.id;

  // find all artiles in the mongo db
  Article.findOne({ _id: id}, function(err, article){

    res.render('article/show', { // REMINDER: render vs. json
      title: 'BDW - Blog',
      article: article // return all articles to the list.swig
    });

  });

});

// GET http://localhost:3000/article/:id/edit - edit form
router.get('/:id/edit', function (req, res, next){

  var id = req.params.id;

  // find all articles in the mongo db
  Article.findOne ({ _id: id}, function(err, article){

      res.render('article/edit', { // REMINDER: render vs. json
        title: 'BDW - Blog',
        article: article // return all articles to the list.swig
      });

    });

});

// POST http://localhost:3000/article/:id - edit form submission
router.post('/:id', function (req, res, next) {

      var id = req.params.id;
      console.log(req.body);

      Article.findOneAndUpdate({ _id: id}, req.body, function(err, article){
          console.log(article);
          if(err) return next(err)
          res.redirect('back');

      });

});



// INFO: hitting localhost:3000/article/bootstrap
// will push all posts into Mongolab
router.get('/bootstrap', function (req, res, next){

    Article.create(posts.posts, function(err, articles){

          if(err) return next(err);
        res.send(articles);  

    });

});






// EXAMPLES

// GET localhost:3000/article - view all articles
// POST localhost:3000/article/1 - update article by id
// GET localhost:3000/article/1 - show the article
// GET localhost:3000/article/1/edit - edit article view
