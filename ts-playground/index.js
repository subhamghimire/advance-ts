"use strict";
exports.__esModule = true;
exports.p2 = exports.p1 = void 0;
exports.p1 = {
    userName: "alex123",
    address: "123 Main St."
};
exports.p2 = {
    userName: "ryan123",
    address: "123 Main St."
};
var persons = {
    alex: exports.p1,
    ryan: exports.p2
};
persons["alex"].userName = "alex567";
console.log(persons["alex"]);
