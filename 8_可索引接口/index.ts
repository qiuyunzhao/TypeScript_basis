// 可索引接口：用于对数组、对象的约束  （几乎不用）

//ts中定义数组的方式
var arr: number[] = [2342, 235325]
var arr1: Array<string> = ['111', '222']

// 可索引接口 对数组的约束
interface UserArr {
    [index: number]: string
}


var arr2: UserArr = ['aaa', 'bbb'];
console.log(arr2[0]);

// var arr3: UserArr = [123, 'bbb'];  /*错误*/
// console.log(arr[0]);


// 可索引接口 对对象的约束
interface UserObj {
    [index: string]: string
}

var arr4: UserObj = { name: '张三' };
console.log(arr4);