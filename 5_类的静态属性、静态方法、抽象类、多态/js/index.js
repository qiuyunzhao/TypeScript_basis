"use strict";
/*
               typeScript中的类 静态属性、静态方法、抽象类、多态
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // ES5 静态属性 静态方法  
// function Person() {
//     this.name1 = '静态'
//     this.run1 = function () {
//         console.log(this.name1)
//     }
// }
// //静态属性
// Person.prototype.name = '哈哈哈';
// //静态方法
// Person.run2 = function () {
//     console.log("执行静态方法")  
// }
// var p = new Person();
// p.run1();
// Person.run2(); //静态方法的调用
console.log("------------------------------ 1.静态属性、静态方法------------------------------");
var Per = /** @class */ (function () {
    //构造函数
    function Per(name) {
        this.age = 20;
        this.name = name;
    }
    // 实例方法
    Per.prototype.run = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8");
    };
    Per.prototype.work = function () {
        console.log(this.name + "\u5728\u5DE5\u4F5C");
    };
    // 静态方法 智能调用类里边的静态属性
    Per.print = function () {
        console.log('静态方法中使用静态变量:' + Per.sex);
    };
    //静态属性
    Per.sex = "男";
    return Per;
}());
var p = new Per('张三');
p.run();
Per.print();
console.log(Per.sex);
console.log("------------------------------ 2.抽象类------------------------------");
/*typescript中的抽象类：它供其他类继承的基类，不能直接被实例化。
    1.用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
    2.abstract抽象方法只能放在抽象类里面
    3.抽象类和抽象方法用来定义标准。
*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log(this.name + '---奔跑');
    };
    return Animal;
}());
// var a=new Animal() /*错误的写法*/
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    //抽象类的子类必须实现抽象类里面的所有抽象方法,否则子类也必须是抽象类
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '---吃骨头');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.speek = function () {
        console.log(this.name + '---喵喵喵');
    };
    Cat.prototype.eat = function () {
        console.log(this.name + '---吃鱼');
    };
    return Cat;
}(Animal));
var c = new Cat('小花猫');
c.eat();
c.run();
c.speek();
console.log("------------------------------ 3.多态 ------------------------------");
// 多态:父类定义一个方法不去实现，让继承它的子类去重写实现，每一个子类有不同的表现（注：与java不同） 
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.work = function () {
        console.log(this.name + "工作"); //具体左什么不知道，由继承它的子类去重写，每一个子类的表现不一样
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.work = function () {
        console.log(this.name + "教书");
    };
    return Teacher;
}(Person));
var t = new Teacher("老师");
t.work();
