// 函数类型接口:对方法传入的参数 以及返回值进行约束（可批量约束）

// 函数类型接口定义
interface encrypt {
    (key: string, value: string): string;
}

// 函数类型接口实现
var md5: encrypt = function (key: string, value: string): string {
    return key + value;
}

console.log(md5('name', 'zhangsan'));

// 函数类型接口实现
var sha1: encrypt = function (key: string, value: string): string {
    return key + '----' + value;
}

console.log(sha1('name', 'lisi'));