/*
    装饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

    通俗的讲装饰器就是一个“方法”，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）

    装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一
*/


/*  1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。
    类装饰器应用于类构造函数，可以用来监视，修改或替换类定义
*/


console.log("--------------------  类装饰器:普通装饰器（无法传参） -------------------- ");

// 参数params 就是当前类
function logClass1(params: any) {

    console.log(params);

    params.prototype.apiUrl = '动态扩展的属性';
    params.prototype.run = function () {
        console.log('动态扩展的run方法');
    }

}

@logClass1
class HttpClient {
    constructor() { }
    getData() { }
}

var http: any = new HttpClient();
console.log(http.apiUrl);
http.run();


console.log("--------------------  类装饰器:装饰器工厂（可传参） -------------------- ");

// params是传入参数 http://www.itying.com/api
function logClass2(params: string) {
    console.log(params);
    return function (target: any) {
        console.log(target); // 参数 target 就是当前类
        target.prototype.apiUrl = params;
    }
}

@logClass2('http://www.itying.com/api')
class HttpClient1 {
    constructor() { }
    getData() { }
}

var http: any = new HttpClient1();
console.log(http.apiUrl);

console.log("--------------------------  1.类装饰器  -------------------------- ");
/* 1、类装饰器 
     下面是一个重载构造函数的例子。
     类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
     如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
*/

function classDecorator(target: any) {

    console.log(target);

    return class extends target {
        apiUrl: any = '我是修改后的数据';
        getData() {
            this.apiUrl = this.apiUrl + '----';
            console.log(this.apiUrl);
        }
    }
}

@classDecorator
class Client1 {
    public apiUrl: string | undefined;
    constructor() {
        this.apiUrl = '我是构造函数里面的apiUrl';
    }
    getData() {
        console.log(this.apiUrl);
    }
}

var client1: any = new Client1();
client1.getData();


console.log("--------------------------  2、属性装饰器  -------------------------- ");
/*
   2、属性装饰器
    属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
        1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
        2、成员的名字。
*/

// //类装饰器
function classDecorator1(params: string) {
    return function (target: any) {
        console.log("=== " + target); //当前类
        console.log("=== " + params); //传入的参数       
    }
}

//属性装饰器
function propertyDecorator(params: any) {
    return function (target: any, attr: any) {
        target[attr] = params;

        console.log("--- " + params); //传入的参数
        console.log("--- " + target); //类的原型对象
        console.log("--- " + attr);   //属性名
    }
}

@classDecorator1('xxxx')
class Client2 {
    @propertyDecorator('http://itying.com')
    public url: any | undefined;
    constructor() {
    }
    getData() {
        console.log(this.url);
    }
}

var client2 = new Client2();
client2.getData();


console.log("--------------------------  3.1、方法装饰器一  -------------------------- ");
/*
    3、方法装饰器
        它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。

        方法装饰会在运行时传入下列3个参数：
            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
            2、方法名字。
            3、方法描述符。
*/

//方法装饰器一
function methodDecorator1(params: any) {
    return function (target: any, methodName: any, desc: any) {

        console.log("--- " + target);     //原型对象
        console.log("--- " + methodName); //方法名称
        console.log("--- " + desc);       //方法描述符

        target.apiUrl = params;
        target.run = function () {
            console.log('methodDecorator1 -- run()');
        }
    }
}

class Client3 {
    public apiUrl: any | undefined;
    constructor() { }

    @methodDecorator1('http://www.itying,com')
    getData() {
        console.log(this.apiUrl);
    }
}

var client3: any = new Client3();
client3.run();
client3.getData();


console.log("--------------------------  3.2、方法装饰器二  -------------------------- ");

//方法装饰器二
function methodDecorator2(params: any) {
    return function (target: any, methodName: any, desc: any) {

        console.log(target);     //原型对象
        console.log(methodName); //方法名称
        console.log(desc.value); //desc:方法描述  desc.value:当前方法

        var originalMethod = desc.value; //保存当前的方法

        //修改装饰器的方法,把装饰器方法里面传入的所有参数改为string类型
        desc.value = function (...args: any[]) {
            args = args.map((value) => {
                return String(value);
            })
            console.log(args);
            originalMethod.apply(this, args);
        }

    }
}

class Client4 {
    public url: any | undefined;
    constructor() { }

    @methodDecorator2('http://www.itying,com')
    getData(...args: any[]) {
        console.log(args);
        console.log('我是getData里面的方法');
    }
}

var client4 = new Client4();
client4.getData(123, 'xxx');


console.log("--------------------------  4、方法参数装饰器  -------------------------- ");
/*
    4、方法参数装饰器
        参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
            2、参数的名字。
            3、参数在函数参数列表中的索引。
*/

function methodParamDecorator(params: any) {

    return function (target: any, methodName: any, paramsIndex: any) {

        console.log(params);       //传入参数
        console.log(target);       //原型对象
        console.log(methodName);   //参数名
        console.log(paramsIndex);  //参数索引

        target.apiUrl = params;

    }

}

class Client5 {
    public url: any | undefined;
    constructor() {
    }
    getData(@methodParamDecorator('xxxxx') uuid: any) {
        console.log(uuid);
    }
}


var client5: any = new Client5();
client5.getData(123456);
console.log(http.apiUrl);



console.log("--------------------------  5、装饰器执行顺序  -------------------------- ");
//  属性 > 方法 > 方法参数 > 类
//  如果有多个同样的装饰器，它会先执行后面的

function decoratorClass1(params: string) {
    return function (target: any) {
        console.log('类装饰器1')
    }
}

function decoratorClass2(params: string) {
    return function (target: any) {
        console.log('类装饰器2')
    }
}

function decoratorAttribute1(params?: string) {
    return function (target: any, attrName: any) {
        console.log('属性装饰器1')
    }
}

function decoratorAttribute2(params?: string) {
    return function (target: any, attrName: any) {
        console.log('属性装饰器2')
    }
}

function decoratorMethod1(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法装饰器1')
    }
}
function decoratorMethod2(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法装饰器2')
    }
}

function decoratorMethodParams1(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法参数装饰器1')
    }
}

function decoratorMethodParams2(params?: string) {
    return function (target: any, attrName: any, desc: any) {
        console.log('方法参数装饰器2')
    }
}


//类装饰器
@decoratorClass1('****')
@decoratorClass2('xxxx')
class MyClient {
    //属性装饰器
    @decoratorAttribute1()
    @decoratorAttribute2()
    public apiUrl: string | undefined;
    constructor() { }

    //方法装饰器
    @decoratorMethod1()
    @decoratorMethod2()
    getData() {
        return true;
    }

    //方法属性装饰器
    setData(@decoratorMethodParams1() attr1: any, @decoratorMethodParams2() attr2: any) { }
}

var myClient: any = new MyClient();