"use strict";
/*4、typeScript中的类
    4.1 类的定义
    4.2 继承
    4.3 类里面的修饰符
    4.4 静态属性 静态方法
    4.5 抽象类 继承 多态
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
/* typescript里面定义属性的时候给我们提供了 三种修饰符

    public     :公有        当前类里面、子类、类外面都可以访问
    protected  :保护类型    在当前类里面、子类里面可以访问; 在类外部没法访问
    private    :私有        在当前类里面可以访问; 子类、类外部都没法访问
    属性如果不加修饰符默认就是公有（public）
*/
var Person = /** @class */ (function () {
    //构造函数
    function Person(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    //方法
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getSex = function () {
        return this.sex;
    };
    Person.prototype.setSex = function (sex) {
        this.sex = sex;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.toString = function () {
        console.log(this.name + "--" + this.sex + "--" + this.age);
    };
    return Person;
}());
//实例化对象
var person1 = new Person("张三", true, 24);
person1.toString();
//TS类的继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    //构造函数
    function Student(name, sex, age) {
        return _super.call(this, name, sex, age) || this;
    }
    //与父类同名方法会覆盖父类方法
    Student.prototype.toString = function () {
        console.log(this.name + "**" + this.sex + "**" + this.age); //私有属性子类不能访问到，编译为js可运行
    };
    return Student;
}(Person));
var stu = new Student("小红", false, 18);
stu.toString();
