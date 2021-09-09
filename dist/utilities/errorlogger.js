"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var errorLogger = function (err, req, res, next) {
    if (err) {
        console.log(err.message);
        fs_1.default.appendFile('ErrorLogger.txt', new Date() + ' : ' + err.stack + '\n', function (error) {
            if (error) {
                console.log("Logging error failed");
            }
        });
        res.status(500);
        res.json({ "error": err.message });
    }
    next();
};
exports.default = errorLogger;
