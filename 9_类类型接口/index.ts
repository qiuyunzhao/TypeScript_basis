//类类型接口:用于对类的约束  和  抽象类抽象有点相似    

//类类型接口定义
interface Animal {
    name: string;           //属性类型接口
    eat(str: string): void; //函数类型接口
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    //可以不用传入参数
    eat() {
        console.log(this.name + '吃骨头')
    }
}

class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;

    }

    eat(food: string) {
        console.log(this.name + '吃' + food);
    }
}



var d = new Dog('小黑');
d.eat();

var c = new Cat('小花');
c.eat('鱼');