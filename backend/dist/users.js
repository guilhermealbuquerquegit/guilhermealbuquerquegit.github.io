"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "guilherme@gmail.com": new User('guilherme@gmail.com', 'guilherme', 'gads'),
    "laryssa@gmail.com": new User('laryssa@gmail.com', 'laryssa', 'laryssa03')
};
