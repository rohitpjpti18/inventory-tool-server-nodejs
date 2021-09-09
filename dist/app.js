"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
var dotenv_1 = __importDefault(require("dotenv"));
var requestlogger_1 = __importDefault(require("./utilities/requestlogger"));
var errorlogger_1 = __importDefault(require("./utilities/errorlogger"));
dotenv_1.default.config();
var PORT = 3000;
var app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(requestlogger_1.default);
app.get('/', function (req, res, next) {
    res.send("<h1>Hello World</h1>");
});
app.use(errorlogger_1.default);
app.listen(PORT, function () { return console.log("Running on " + PORT); });
