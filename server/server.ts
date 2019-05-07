'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
require('dotenv').config();

const app = module.exports = loopback();

const schema = require('../graphql/schema');
const attachApolloServer = require('../graphql/attachApolloServer');

attachApolloServer(
  {
    schema,
    playground: true,
    context({ req }: any) {
      console.log(req.url, Date.now());
    },
    introspection: true
  },
  {
    app,
    path: '/powerdrive-gql'
  }
);

app.dataSource('mongoDS', {
  url: `${process.env.MONGODB_URI}`,
    name: "mongoDS",
    connector: "mongodb",
    useNewUrlParser: true
});
app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err: any) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

module.exports = app;