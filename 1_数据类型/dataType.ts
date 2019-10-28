/*   typeScript(es6)中的数据类型

    typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型

        布尔类型（boolean）
        数字类型（number）
        字符串类型(string)
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
        任意类型（any）
        null 和 undefined
        void类型
        never类型
*/


console.log("---------------------------- 布尔类型（boolean）----------------------------");

// typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验；写ts代码必须指定类型
var flag: boolean = true;
flag = false;  //正确
console.log(flag);
// flag=123;  //错误

console.log("---------------------------- 数字类型（number）----------------------------");

var num: number = 123;
num = 456;
console.log(num); //正确
// num = 'str';    //错误

console.log("---------------------------- 字符串类型(string) ----------------------------");

var str: string = 'this is ts';
str = 'haha';  //正确
console.log(str);
// str = true;  //错误

console.log("---------------------------- 数组类型（array） ----------------------------");
var arr = ['1', '2'];  //es5定义数组
console.log(arr);

// 1.第一种定义数组的方式
var arr1: number[] = [11, 22, 33]; //只能是number类型
console.log(arr);
//2.第二种定义数组的方式
var arr2: Array<string> = ["11", "22", "33"]; //只能是string
console.log(arr2)

console.log("---------------------------- 元组类型（tuple） ----------------------------");

// 元组类型（tuple）: 属于数组的一种,元祖类型即给数组每个位置分别指定类型
let arr3: [number, string] = [123, 'this is ts'];
console.log(arr3);

console.log("---------------------------- 枚举类型（enum） ----------------------------");
/*
            enum 枚举名{
                标识符[=整型常数],
                标识符[=整型常数],
                ...
                标识符[=整型常数],
            } ;
 */
enum Flag { success = 1, error = 2 };

let s: Flag = Flag.success; //1
let f: Flag = Flag.error;   //2
console.log(s);
console.log(f);

enum Color { blue, red, 'orange' };
var c: Color = Color.red;
console.log(c);    //1  如果标识符没有赋值 它的值就是下标


enum Color1 { blue, red = 3, 'orange' };
var c1: Color1 = Color1.orange;
console.log(c1);   //4

enum Err { 'undefined' = -1, 'null' = -2, 'success' = 1 };
var e: Err = Err.success;
console.log(e);    //1

console.log("---------------------------- 任意类型（any） ----------------------------");

var num1: any = 123;
num1 = 'str';
num1 = true;
console.log(num);

//任意类型的用处
var oBox: any = document.getElementById('box');
oBox.style.color = 'red';


console.log("---------------------------- null 和 undefined ----------------------------");

// null 和 undefined  其他（never类型）数据类型的子类型
var num2: number;
// console.log(num2);  //输出：undefined   编译语法报错，但js可以运行

var num3: undefined;
console.log(num3);  //输出：undefined

var num4: number | undefined;
console.log(num4);  //输出：undefined
num4 = 123;
console.log(num4);  //输出：123

var num5: null;
num5 = null;
console.log(num5);
// num5 = "11" //编译语法报错，但js可以运行
console.log(num5);

//一个元素可能是 number类型 可能是null 可能是undefined
var num6: number | null | undefined;
num6 = 1234;
console.log(num6)

console.log("---------------------------------- void类型 ----------------------------------");

// void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。

// es5的定义方法
function run1() {
    console.log('es5-run()')
}
run1();

// es6的正确定义方法
function run2(): void {
    console.log('es6-run()')
}
run2();

function run3(): number {
    return 123;
}
console.log(run3());

//错误写法
// function run(): undefined {
//     console.log('error-run()')
// }
// run();

console.log("---------------------------------- never类型 ----------------------------------");

// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。

//这意味着声明never的变量只能被never类型所赋值。
var a: undefined;
a = undefined;

var b: null;
b = null;

var err: never;
// err = 123; //错误的写法
err = (() => {
    throw new Error('错误');
})()
