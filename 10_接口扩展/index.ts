// 接口扩展：即接口可以继承接口 

//接口1
interface Animal {
    eat(): void;
}

//接口2 继承 接口1
interface Person extends Animal {
    work(): void;
}

//父类
class Programmer {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    coding(code: string) {
        console.log(this.name + code)
    }
}


class Web extends Programmer implements Person {

    constructor(name: string) {
        super(name)
    }

    eat() {
        console.log(this.name + '喜欢吃馒头')
    }

    work() {
        console.log(this.name + '工作');
    }
}


var w = new Web('小李');
w.eat();
w.work();
w.coding('写ts代码');