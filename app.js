const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5050;
const history = require('connect-history-api-fallback');
const router = express.Router();

const { createProxyMiddleware } = require('http-proxy-middleware');
const options = {
  target: 'http://localhost:5000', 
  headers: {
      accept: "application/json, application/x-www-form-urlencoded"
  },
  changeOrigin: true
};

const api = createProxyMiddleware(options);
app.use('/api', api);
app.use(history());

express.json();
express.urlencoded({
    extended: true
});

// must specify options hash even if no options provided!
var phpExpress = require('php-express')({

	// assumes php is in your PATH
	binPath: 'php'
  });
  
  // set view engine to php-express
  app.set('views', 'public');
  app.engine('php', phpExpress.engine);
  app.set('view engine', 'php');
  
  // routing all .php file to php-express
  app.all(/.+\.php$/, phpExpress.router);

  app.use(express.static(path.join(__dirname, "public")));


app.get('/', function(req, res) {
    res.render(path.join(__dirname + '/index.html'));
  });

app.listen(port, () => {
	console.log(`app is running on ${port}`);
})
