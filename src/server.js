require('babel-register');

const express = require('express');
const compression = require('compression');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const match = ReactRouter.match;
const RouterContext = ReactRouter.RouterContext;
const _ = require('lodash');
const fs = require('fs');

const app = express();
app.use(compression({threshold: 0}));

/***************************************************************************************************************
    UNIVERSAL RENDERING
***************************************************************************************************************/
const baseTemplate = fs.readFileSync('src/index.html');
const template = _.template(baseTemplate);
const Routes = require('./routes');
const routes = Routes.getRoutes();

const port = process.env.PORT || 8080;

app.use('/', express.static('public'));

app.use('/', (req, res) => {
  match({routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const body = ReactDOMServer.renderToString(
        React.createElement(RouterContext, renderProps)
      )
      res.status(200).send(template({body}))
    } else {
      res.status(404).send('Not found')
    }
  })
})

app.listen(port);
console.log('Magic happens at http://localhost:' + port);

module.exports = app;
