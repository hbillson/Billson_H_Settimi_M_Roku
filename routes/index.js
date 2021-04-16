const express = require('express');
const router = express.Router();
const app = express();
const history = require('connect-history-api-fallback');

//const { createProxyMiddleware } = require('http-proxy-middleware');

console.log("hitting index.js");
router.use("/api", createProxyMiddleware({
    target: 'http://localhost:5000', 
    headers: {
        accept: "application/json, application/x-www-form-urlencoded"
    },
    changeOrigin: true
}))
app.use(history());

router.get("/", (req, res) => {
    res.send("hit the main route");
})

module.exports = router;