"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./user"));
var Auth = /** @class */ (function () {
    function Auth() {
        // const user1 = new User("sarah", "sarah@yahoo.com", "123456");
        // const user2 = new User("paul", "paul@outlook.com", "password");
        this.users = [];
        this.users = [];
    }
    Auth.prototype.login = function (email, pwd) {
        var user = this.users.find(function (e) {
            var isMatch = e.email === email && e.pwd === pwd;
            return isMatch;
        });
        if (!user)
            throw new Error("invalid email or password 404");
        user.lastLogin = new Date().toDateString();
        return user.name + " welcome back !";
    };
    Auth.prototype.register = function (name, email, pwd) {
        var user = new user_1.default(name, email, pwd);
        user.isVerified = true;
        user.lastLogin = new Date().toDateString();
        var data = {
            name: name,
            email: email,
            password: pwd,
            isEmailVerified: user.isVerified,
            lastLogin: user.lastLogin,
        };
        return data;
    };
    return Auth;
}());
exports.default = Auth;
