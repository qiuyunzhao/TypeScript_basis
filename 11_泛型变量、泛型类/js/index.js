"use strict";
/*
        typeScript中的泛型
            6.1 泛型的定义
            6.2 泛型函数
            6.3 泛型类
            6.4 泛型接口

泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，
     这在创建大型系统时为你提供了十分灵活的功能。
     在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。这样用户就可以以自己的数据类型来使用组件。
     通俗理解：泛型就是解决 类、接口、方法的复用性，以及对不特定数据类型的支持(类型校验)
*/
// 1. 只能返回string类型的数据
function getStringTypeData(value) {
    return value;
}
// 2. 同时返回 string类型 和number类型（any可以解决这个问题）
function getAnyTypeData(value) {
    return value;
}
getAnyTypeData(123);
getAnyTypeData('str');
// 3. any放弃了类型检查,传入的参数类型和返回的参数类型可以不一致
function getData(value) {
    return '哈哈哈';
}
getAnyTypeData(123);
//4. 如果功能需求:传入什么，返回什么。(比如:传入number类型需要返回number类型；传入string类型需要返回string类型)
// 泛型：可以支持不特定的数据类型   实现要求:传入的参数和返回的参数一直
// T表示泛型（可以用任意字母，习惯用T），具体什么类型是调用这个方法的时候决定的
function getData1(value) {
    return value;
}
getData1(123);
getData1('1214231');
// getData1<number>('2112');       /*错误的写法*/
function getData2(value) {
    return '2145214214';
}
getData2(123);
getData2('这是一个泛型');
// 5. 泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串a-z两种类型（通过类的泛型来实现）
/* 只支持一种类型
        class MinClass{
            public list:number[]=[];
            add(num:number){
                this.list.push(num)
            }
            min():number{
                var minNum=this.list[0];
                for(var i=0;i<this.list.length;i++){
                    if(minNum>this.list[i]){
                        minNum=this.list[i];
                    }
                }
                return minNum;
            }

        }

        var m=new MinClass();
        m.add(3);
        m.add(22);
        m.add(23);
        m.add(6);
        m.add(7);
        alert(m.min());
*/
//类的泛型实现
var MinClas = /** @class */ (function () {
    function MinClas() {
        this.list = [];
    }
    MinClas.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClas.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClas;
}());
var m1 = new MinClas(); /*实例化类 并且制定了类的T代表的类型是number*/
m1.add(11);
m1.add(3);
m1.add(2);
console.log(m1.min());
var m2 = new MinClas(); /*实例化类 并且制定了类的T代表的类型是string*/
m2.add('c');
m2.add('a');
m2.add('v');
console.log(m2.min());
