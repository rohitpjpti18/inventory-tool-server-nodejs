"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestlogger = function (req, res, next) {
    try {
        var logMessage = new Date().toTimeString() + " - " + req.method + " : " + req.url;
        console.log(logMessage);
        next();
    }
    catch (err) {
        next(err);
    }
};
exports.default = requestlogger;
