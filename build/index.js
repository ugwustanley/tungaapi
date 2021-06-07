"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = __importDefault(require("./routes/auth"));
var bodyParser = require("body-parser");
var app = express_1.default();
app.use(bodyParser.json());
app.get("/", function (req, res, next) {
    res.send("you are on the homepage");
});
app.use(auth_1.default);
var PORT = 3001;
app.listen(PORT, function () {
    console.log(" code is running at port" + PORT);
});
