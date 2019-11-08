"use strict";
// 函数类型接口:对方法传入的参数 以及返回值进行约束（可批量约束）
// 函数类型接口实现
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('name', 'zhangsan'));
// 函数类型接口实现
var sha1 = function (key, value) {
    return key + '----' + value;
};
console.log(sha1('name', 'lisi'));
