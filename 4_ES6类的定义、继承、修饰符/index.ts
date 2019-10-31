/*4、typeScript中的类的定义、继承、修饰符*/

/* typescript里面定义属性的时候给我们提供了 三种修饰符

    public     :公有        当前类里面、子类、类外面都可以访问
    protected  :保护类型    在当前类里面、子类里面可以访问; 在类外部没法访问
    private    :私有        在当前类里面可以访问; 子类、类外部都没法访问
    属性如果不加修饰符默认就是公有（public）
*/

class Person {
    //属性
    public name: string;
    protected sex: boolean;
    private age: number;

    //构造函数
    constructor(name: string, sex: boolean, age: number) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    //方法
    public getName(): string {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }

    protected getSex(): boolean {
        return this.sex;
    }
    protected setSex(sex: boolean) {
        this.sex = sex;
    }

    private getAge(): number {
        return this.age;
    }
    private setAge(age: number) {
        this.age = age;
    }

    public toString() {
        console.log(this.name + "--" + this.sex + "--" + this.age);
    }
}

//实例化对象
var person1 = new Person("张三", true, 24);
person1.toString();


//TS类的继承
class Student extends Person {
    //构造函数
    constructor(name: string, sex: boolean, age: number) {
        super(name, sex, age);
    }

    //与父类同名方法会覆盖父类方法
    public toString() {
        // console.log(this.name + "**" + this.sex + "**" + this.age); //私有属性子类不能访问到，编译为js可运行
        console.log(this.name + "**" + this.sex);
    }
}

var stu = new Student("小红", false, 18);
stu.toString();