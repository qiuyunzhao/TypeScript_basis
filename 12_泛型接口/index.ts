//函数类型接口
interface Config {
    (value1: string, value2: string): string;
}

var setData: Config = function (value1: string, value2: string): string {
    return value1 + value2;
}

setData('name', '张三');


//1、泛型函数接口
interface ConfigFn1 {
    <T>(value: T): T;
}

var getData1: ConfigFn1 = function <T>(value: T): T {
    return value;
}

getData1<string>('张三');
// getData<string>(1243);  //错误


//2、泛型接口
interface ConfigFn2<T> {
    (value: T): T;
}

function getData2<T>(value: T): T {
    return value;
}

var myGetData: ConfigFn2<string> = getData2;

myGetData('20');  /*正确*/
// myGetData(20)  //错误