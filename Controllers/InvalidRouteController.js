const JsonResponseService = require("../Services/JsonResponseService");

const invalidRoute = (req, res) => {
    res.json(JsonResponseService())
}

module.exports.invalidRoute = invalidRoute