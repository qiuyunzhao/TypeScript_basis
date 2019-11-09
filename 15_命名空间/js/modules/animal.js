"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//命名空间 A
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(theName) {
            this.name = theName;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + " \u5728\u5403\u72D7\u7CAE\u3002");
        };
        return Dog;
    }());
    A.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(theName) {
            this.name = theName;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + " \u5403\u732B\u7CAE\u3002");
        };
        return Cat;
    }());
    A.Cat = Cat;
})(A || (A = {}));
exports.A = A;
//命名空间 B
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(theName) {
            this.name = theName;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + " \u5728\u5543\u9AA8\u5934\u3002");
        };
        return Dog;
    }());
    B.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(theName) {
            this.name = theName;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + " \u5728\u5403\u9C7C\u3002");
        };
        return Cat;
    }());
    B.Cat = Cat;
})(B || (B = {}));
exports.B = B;
