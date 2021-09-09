"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var verifyToken = function (req, res, next) {
    var token;
    try {
        token = req.headers['x-access-token'];
    }
    catch (err) {
    }
    if (!token) {
        var err = new Error("No Token Provided");
        throw err;
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(token, "sdklfsalkfjsaldkf");
        res.locals.session = decoded;
    }
    catch (err) {
        var err_1 = new Error("Invalid Token");
        throw err_1;
    }
    next();
};
exports.default = verifyToken;
