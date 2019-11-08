/*
        typeScript中的接口
            5.1 属性接口
            5.2 函数类型接口
            5.3 可索引接口
            5.4 类类型接口
            5.5 接口扩展
*/


/*
接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范；在程序设计里面，接口起到一种限制和规范的作用。
接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，
提供这些方法的类就可以满足实际需要。 typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
*/


// 1、属性接口

console.log("---------------------------------------对批量方法进行约束------------------------------------------")
interface FullName {
    firstName: string;
    secondName: string;
}

// 必须传入对象包含 firstName和secondName属性
function printName(name: FullName) {
    console.log(name.firstName + '--' + name.secondName);
    // console.log(name.age); //错误 - 接口之外的属性不能使用
}

function printInfo(info: FullName) {
    console.log(info.firstName + info.secondName);
}

var obj = {
    age: 20,
    firstName: '张',
    secondName: '三'
};
printName(obj);   //将声明好的对象作为参数，对象中可以有接口外的属性


printInfo({
    firstName: '李',
    secondName: '四',
    // age：20    //错误 - 直接将对象作为参数传入不能有接口之外的属性
})


console.log("--------------------------------------- 可选属性 ------------------------------------------")

interface Address {
    country: string;
    province?: string;
}

function getName(name: Address) {
    console.log(name)
}

getName({
    country: '中国',
    province: '济南'
})

getName({
    country: '中国'
})




/*
    $.ajax({
            type: "GET",
            url: "test.json",
            data: {username:$("#username").val(), content:$("#content").val()},
            dataType: "json"
        });
*/

// 请求数据的接口
interface Config {
    type: string;
    url: string;
    data?: string;
    dataType: string;
}

//原生js封装的ajax 
function ajax(config: Config) {

    var xhr = new XMLHttpRequest();

    xhr.open(config.type, config.url, true);

    xhr.send(config.data);

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('成功');

            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            } else {
                console.log(xhr.responseText)
            }

        }
    }
}


ajax({
    type: 'get',
    data: 'name=zhangsan',
    url: 'http://a.itying.com/api/productlist', //api
    dataType: 'json'
})