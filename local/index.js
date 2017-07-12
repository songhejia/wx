const option = {
    "/\/conversation\/list/": {
        // target: "http://localhost:3000",
        bypass: function (req, res, proxyOptions) {
            var url = "local/data/conversation.list.json";
            console.log(req.url, ' > ', url)
            return url;
        }
    }
}




module.exports = option