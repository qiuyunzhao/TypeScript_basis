"use strict";
//类类型接口:用于对类的约束  和  抽象类抽象有点相似    
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    //可以不用传入参数
    Dog.prototype.eat = function () {
        console.log(this.name + '吃骨头');
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function (food) {
        console.log(this.name + '吃' + food);
    };
    return Cat;
}());
var d = new Dog('小黑');
d.eat();
var c = new Cat('小花');
c.eat('鱼');
