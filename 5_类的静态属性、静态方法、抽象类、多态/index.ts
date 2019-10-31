/*
               typeScript中的类 静态属性、静态方法、抽象类、多态
*/

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


console.log("------------------------------ 1.静态属性、静态方法------------------------------")
class Per {
    public name: string;
    public age: number = 20;
    //静态属性
    static sex = "男";
    //构造函数
    constructor(name: string) {
        this.name = name;
    }
    // 实例方法
    public run() {
        console.log(`${this.name}在运动`)
    }
    private work() {
        console.log(`${this.name}在工作`)
    }

    // 静态方法 智能调用类里边的静态属性
    static print() {
        console.log('静态方法中使用静态变量:' + Per.sex);
    }
}

var p = new Per('张三');
p.run();
Per.print();
console.log(Per.sex);

console.log("------------------------------ 2.抽象类------------------------------")
/*typescript中的抽象类：它供其他类继承的基类，不能直接被实例化。
    1.用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
    2.abstract抽象方法只能放在抽象类里面
    3.抽象类和抽象方法用来定义标准。
*/
abstract class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    //抽象方法  不包含具体实现,必须在派生类中实现。
    abstract eat(): any;
    abstract speek(): any;

    run() {
        console.log(this.name + '---奔跑')
    }
}

// var a=new Animal() /*错误的写法*/

abstract class Dog extends Animal {
    //抽象类的子类必须实现抽象类里面的所有抽象方法,否则子类也必须是抽象类
    constructor(name: any) {
        super(name)
    }
    eat() {
        console.log(this.name + '---吃骨头')
    }
}

class Cat extends Animal {

    constructor(name: any) {
        super(name)
    }

    speek() {
        console.log(this.name + '---喵喵喵')
    }

    eat() {
        console.log(this.name + '---吃鱼')
    }

}

var c = new Cat('小花猫');
c.eat();
c.run();
c.speek();

console.log("------------------------------ 3.多态 ------------------------------")
// 多态:父类定义一个方法不去实现，让继承它的子类去重写实现，每一个子类有不同的表现（注：与java不同） 
class Person {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public work() {
        console.log(this.name + "工作") //具体左什么不知道，由继承它的子类去重写，每一个子类的表现不一样
    }

}

class Teacher extends Person {
    public work() {
        console.log(this.name + "教书")
    }
}

var t = new Teacher("老师");
t.work();
