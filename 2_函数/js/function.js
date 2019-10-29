"use strict";
/*       typeScript中的函数

        2.1、函数的定义
        2.2、可选参数
        2.3、默认参数
        2.4、剩余参数
        2.5、函数重载
        2.6、箭头函数  es6

*/
console.log("------------------------------  2.1、函数定义  ------------------------------");
// //es5 定义函数的方法
// //函数声明法
// function run() {
//     return 'run';
// }
// //匿名函数
// var run2 = function () {
//     return 'run2';
// }
//ts中定义函数的方法
//函数声明法 - 有返回值
function getInfo(name, age) {
    return name + " --- " + age; //模板字符串
}
//函数调用
console.log(getInfo('zhangsan', 20));
// 匿名函数 - 无返回值
var getInfo1 = function (name, age) {
    console.log("函数学习");
};
console.log("------------------------------  2.2、方法可选参数  --------------------------");
// es5里面方法的实参和行参 个数可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
//注意:可选参数必须配置到参数的最后面 
function getInfo2(name, age) {
    if (age) {
        return name + " --- " + age;
    }
    else {
        return name + " ---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getInfo2('zhangsan'));
console.log(getInfo2('zhangsan', 123));
console.log("------------------------------  2.3、默认参数  ------------------------------");
// es5里面没法设置默认参数，es6和ts中都可以设置默认参数
function getInfo3(name, age) {
    if (age === void 0) { age = 20; }
    return name + " --- " + age;
}
console.log(getInfo3('张三'));
console.log(getInfo3('张三', 30));
console.log("-----------------------------  2.4、剩余参数（三点运算)------------------------");
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6));
function sum1(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    //a=1, b=2, result=[4,5,6]
    var sum = a + b;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(sum1(1, 2, 3, 4, 5, 6));
console.log("------------------------------  2.5、函数重载  ------------------------------");
function getInfo4(str) {
    if (typeof str === 'string') {
        return '我叫：' + str;
    }
    else {
        return '我的年龄是' + str;
    }
}
console.log(getInfo4('张三')); //正确
console.log(getInfo4(20)); //正确
function getInfo5(name, age) {
    if (age) {
        return '我叫：' + name + '我的年龄是' + age;
    }
    else {
        return '我叫：' + name;
    }
}
console.log(getInfo5('zhangsan')); //正确
console.log(getInfo5('zhangsan', 20)); //正确
// console.log(getInfo5(123));          //错误
console.log("------------------------------  2.6、箭头函数  es6  -------------------------");
//this指向的问题    箭头函数里面的this指向上下文
setTimeout(function () {
    alert('run');
}, 2000);
// 等价于
setTimeout(function () {
    alert('run');
}, 6000);
