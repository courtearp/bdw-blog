var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 'mongodb://heroku_app35659025:6qill803lh90ip23t60j7rp8fa@ds061651.mongolab.com:61651/heroku_app35659025'
  },

  test: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 'mongodb://localhost/bdw-blog-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 'mongodb://localhost/bdw-blog-production'
  }
};

module.exports = config[env];
