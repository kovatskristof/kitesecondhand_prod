const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        ["/api", "/auth/google", "/auth/facebook", "/auth/signup"],
        createProxyMiddleware({
            target: "http://localhost:2000",
        })
    );
};