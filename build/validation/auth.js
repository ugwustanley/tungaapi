"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthValidation = /** @class */ (function () {
    function AuthValidation() {
    }
    AuthValidation.login = function (req, res, next) {
        var _a = req.body, email = _a.email, pwd = _a.pwd;
        var emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g;
        var result = emailRegex.test(email);
        console.log(result);
        if (typeof email !== "string" || result === false)
            throw "Email is not a string";
        if (typeof pwd !== "string")
            throw "Password must be a string";
        if (!pwd || !email)
            throw "Email or password not provided";
        if (pwd.length < 6)
            throw "password is less than six";
        next();
    };
    AuthValidation.register = function (req, res, next) {
        var _a = req.body, name = _a.name, email = _a.email, pwd = _a.pwd;
        var emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g;
        var result = emailRegex.test(email);
        console.log(result);
        if (typeof email !== "string" || result === false)
            throw "Email is not a string";
        if (typeof pwd !== "string")
            throw "Password must be a string";
        if (!pwd || !email || !name)
            throw "Email or password not provided";
        if (pwd.length < 6)
            throw "password is less than six";
        next();
    };
    return AuthValidation;
}());
exports.default = AuthValidation;
