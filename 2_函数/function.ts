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
function getInfo(name: string, age: number): string {
    return `${name} --- ${age}`; //模板字符串
}

//函数调用
console.log(getInfo('zhangsan', 20));

// 匿名函数 - 无返回值
var getInfo1 = function (name: string, age: number): void {
    console.log("函数学习");
}

console.log("------------------------------  2.2、方法可选参数  --------------------------");

// es5里面方法的实参和行参 个数可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
//注意:可选参数必须配置到参数的最后面 
function getInfo2(name: string, age?: number): string {
    if (age) {
        return `${name} --- ${age}`;
    } else {
        return `${name} ---年龄保密`;
    }


}

console.log(getInfo2('zhangsan'))
console.log(getInfo2('zhangsan', 123))

console.log("------------------------------  2.3、默认参数  ------------------------------");

// es5里面没法设置默认参数，es6和ts中都可以设置默认参数
function getInfo3(name: string, age: number = 20): string {
    return `${name} --- ${age}`;
}

console.log(getInfo3('张三'));
console.log(getInfo3('张三', 30));

console.log("-----------------------------  2.4、剩余参数（三点运算)------------------------");

function sum(...result: number[]): number {
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6));


function sum1(a: number, b: number, ...result: number[]): number {
    //a=1, b=2, result=[4,5,6]
    var sum = a + b;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}

console.log(sum1(1, 2, 3, 4, 5, 6));

console.log("------------------------------  2.5、函数重载  ------------------------------");

//ts为了兼容es5 以及 es6 重载的写法和java中有区别。

//es5中出现同名方法，下面的会替换上面的方法 
/*
    function css(config){}
    function css(config,value){}
*/

//ts中的重载
function getInfo4(name: string): string;

function getInfo4(age: number): string;

function getInfo4(str: any): any {
    if (typeof str === 'string') {
        return '我叫：' + str;
    } else {
        return '我的年龄是' + str;
    }

}

console.log(getInfo4('张三'));   //正确
console.log(getInfo4(20));         //正确
// alert(getInfo4(true));       //错误写法

function getInfo5(name: string): string;

function getInfo5(name: string, age: number): string;

function getInfo5(name: any, age?: any): any {
    if (age) {
        return '我叫：' + name + '我的年龄是' + age;
    } else {
        return '我叫：' + name;
    }
}

console.log(getInfo5('zhangsan'));   //正确
console.log(getInfo5('zhangsan', 20));//正确
// console.log(getInfo5(123));          //错误


console.log("------------------------------  2.6、箭头函数  es6  -------------------------");

//this指向的问题    箭头函数里面的this指向上下文
setTimeout(() => {

    alert('run')
}, 2000)

// 等价于
setTimeout(function(){
    alert('run')
},6000)