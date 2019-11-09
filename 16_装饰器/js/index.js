"use strict";
/*
    装饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

    通俗的讲装饰器就是一个“方法”，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）

    装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*  1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。
    类装饰器应用于类构造函数，可以用来监视，修改或替换类定义
*/
console.log("--------------------  类装饰器:普通装饰器（无法传参） -------------------- ");
// 参数params 就是当前类
function logClass1(params) {
    console.log(params);
    params.prototype.apiUrl = '动态扩展的属性';
    params.prototype.run = function () {
        console.log('动态扩展的run方法');
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () { };
    HttpClient = __decorate([
        logClass1
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
console.log(http.apiUrl);
http.run();
console.log("--------------------  类装饰器:装饰器工厂（可传参） -------------------- ");
// params是传入参数 http://www.itying.com/api
function logClass2(params) {
    console.log(params);
    return function (target) {
        console.log(target); // 参数 target 就是当前类
        target.prototype.apiUrl = params;
    };
}
var HttpClient1 = /** @class */ (function () {
    function HttpClient1() {
    }
    HttpClient1.prototype.getData = function () { };
    HttpClient1 = __decorate([
        logClass2('http://www.itying.com/api')
    ], HttpClient1);
    return HttpClient1;
}());
var http = new HttpClient1();
console.log(http.apiUrl);
console.log("--------------------------  1.类装饰器  -------------------------- ");
/* 1、类装饰器
     下面是一个重载构造函数的例子。
     类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
     如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
*/
function classDecorator(target) {
    console.log(target);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = '我是修改后的数据';
            return _this;
        }
        class_1.prototype.getData = function () {
            this.apiUrl = this.apiUrl + '----';
            console.log(this.apiUrl);
        };
        return class_1;
    }(target));
}
var Client1 = /** @class */ (function () {
    function Client1() {
        this.apiUrl = '我是构造函数里面的apiUrl';
    }
    Client1.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    Client1 = __decorate([
        classDecorator
    ], Client1);
    return Client1;
}());
var client1 = new Client1();
client1.getData();
console.log("--------------------------  2、属性装饰器  -------------------------- ");
/*
   2、属性装饰器
    属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
        1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
        2、成员的名字。
*/
// //类装饰器
function classDecorator1(params) {
    return function (target) {
        console.log("=== " + target); //当前类
        console.log("=== " + params); //传入的参数       
    };
}
//属性装饰器
function propertyDecorator(params) {
    return function (target, attr) {
        target[attr] = params;
        console.log("--- " + params); //传入的参数
        console.log("--- " + target); //类的原型对象
        console.log("--- " + attr); //属性名
    };
}
var Client2 = /** @class */ (function () {
    function Client2() {
    }
    Client2.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        propertyDecorator('http://itying.com')
    ], Client2.prototype, "url", void 0);
    Client2 = __decorate([
        classDecorator1('xxxx')
    ], Client2);
    return Client2;
}());
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
function methodDecorator1(params) {
    return function (target, methodName, desc) {
        console.log("--- " + target); //原型对象
        console.log("--- " + methodName); //方法名称
        console.log("--- " + desc); //方法描述符
        target.apiUrl = params;
        target.run = function () {
            console.log('methodDecorator1 -- run()');
        };
    };
}
var Client3 = /** @class */ (function () {
    function Client3() {
    }
    Client3.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    __decorate([
        methodDecorator1('http://www.itying,com')
    ], Client3.prototype, "getData", null);
    return Client3;
}());
var client3 = new Client3();
client3.run();
client3.getData();
console.log("--------------------------  3.2、方法装饰器二  -------------------------- ");
//方法装饰器二
function methodDecorator2(params) {
    return function (target, methodName, desc) {
        console.log(target); //原型对象
        console.log(methodName); //方法名称
        console.log(desc.value); //desc:方法描述  desc.value:当前方法
        var originalMethod = desc.value; //保存当前的方法
        //修改装饰器的方法,把装饰器方法里面传入的所有参数改为string类型
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            console.log(args);
            originalMethod.apply(this, args);
        };
    };
}
var Client4 = /** @class */ (function () {
    function Client4() {
    }
    Client4.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        console.log('我是getData里面的方法');
    };
    __decorate([
        methodDecorator2('http://www.itying,com')
    ], Client4.prototype, "getData", null);
    return Client4;
}());
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
function methodParamDecorator(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params); //传入参数
        console.log(target); //原型对象
        console.log(methodName); //参数名
        console.log(paramsIndex); //参数索引
        target.apiUrl = params;
    };
}
var Client5 = /** @class */ (function () {
    function Client5() {
    }
    Client5.prototype.getData = function (uuid) {
        console.log(uuid);
    };
    __decorate([
        __param(0, methodParamDecorator('xxxxx'))
    ], Client5.prototype, "getData", null);
    return Client5;
}());
var client5 = new Client5();
client5.getData(123456);
console.log(http.apiUrl);
console.log("--------------------------  5、装饰器执行顺序  -------------------------- ");
//  属性 > 方法 > 方法参数 > 类
//  如果有多个同样的装饰器，它会先执行后面的
function decoratorClass1(params) {
    return function (target) {
        console.log('类装饰器1');
    };
}
function decoratorClass2(params) {
    return function (target) {
        console.log('类装饰器2');
    };
}
function decoratorAttribute1(params) {
    return function (target, attrName) {
        console.log('属性装饰器1');
    };
}
function decoratorAttribute2(params) {
    return function (target, attrName) {
        console.log('属性装饰器2');
    };
}
function decoratorMethod1(params) {
    return function (target, attrName, desc) {
        console.log('方法装饰器1');
    };
}
function decoratorMethod2(params) {
    return function (target, attrName, desc) {
        console.log('方法装饰器2');
    };
}
function decoratorMethodParams1(params) {
    return function (target, attrName, desc) {
        console.log('方法参数装饰器1');
    };
}
function decoratorMethodParams2(params) {
    return function (target, attrName, desc) {
        console.log('方法参数装饰器2');
    };
}
//类装饰器
var MyClient = /** @class */ (function () {
    function MyClient() {
    }
    //方法装饰器
    MyClient.prototype.getData = function () {
        return true;
    };
    //方法属性装饰器
    MyClient.prototype.setData = function (attr1, attr2) { };
    __decorate([
        decoratorAttribute1(),
        decoratorAttribute2()
    ], MyClient.prototype, "apiUrl", void 0);
    __decorate([
        decoratorMethod1(),
        decoratorMethod2()
    ], MyClient.prototype, "getData", null);
    __decorate([
        __param(0, decoratorMethodParams1()), __param(1, decoratorMethodParams2())
    ], MyClient.prototype, "setData", null);
    MyClient = __decorate([
        decoratorClass1('****'),
        decoratorClass2('xxxx')
    ], MyClient);
    return MyClient;
}());
var myClient = new MyClient();
