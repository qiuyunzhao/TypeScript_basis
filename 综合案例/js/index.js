"use strict";
/*
功能：定义一个操作数据库的库  支持 Mysql Mssql  MongoDb

要求1：Mysql MongoDb功能一样  都有 add  update  delete  get方法

注意：约束统一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口 ，需要代码重用所以用到泛型

    1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

    2、泛型：通俗理解：泛型就是解决 类 接口 方法的复用性、
*/
//定义一个操作mysql数据库的类  注意：要实现泛型接口,这个类也应该是一个泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
        console.log('数据库Mysql建立连接');
    }
    MysqlDb.prototype.add = function (info) {
        console.log('Mysql ---- add()');
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        console.log('Mysql ---- update()');
        return true;
    };
    MysqlDb.prototype.delete = function (id) {
        console.log('Mysql ---- delete()');
        return true;
    };
    MysqlDb.prototype.get = function (id) {
        console.log('Mysql ---- get()');
        var list = [
            {
                title: 'xxxx',
                desc: 'xxxxxxxxxx'
            },
            {
                title: 'xxxx',
                desc: 'xxxxxxxxxx'
            }
        ];
        return list;
    };
    return MysqlDb;
}());
//定义一个操作Mongo数据库的类 
var MongoDb = /** @class */ (function () {
    function MongoDb() {
        console.log('数据库Mongo建立连接');
    }
    MongoDb.prototype.add = function (info) {
        console.log('Mongo ---- add()');
        console.log(info);
        return true;
    };
    MongoDb.prototype.update = function (info, id) {
        console.log('Mongo ---- update()');
        return true;
    };
    MongoDb.prototype.delete = function (id) {
        console.log('Mongo ---- delete()');
        return true;
    };
    MongoDb.prototype.get = function (id) {
        console.log('Mongo ---- get()');
        var list = [
            {
                title: '****',
                desc: '********'
            },
            {
                title: '****',
                desc: '********'
            }
        ];
        return list;
    };
    return MongoDb;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '张三111';
u.password = '123456';
var mysql = new MysqlDb(); //类作为参数来约束数据传入的类型 
mysql.add(u);
var mongo = new MongoDb();
mongo.add(u);
//获取User表 ID=4的数据
console.log(mysql.get(1));
console.log(mongo.get(1));
