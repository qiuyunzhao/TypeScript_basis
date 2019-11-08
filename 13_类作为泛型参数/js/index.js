"use strict";
/*
泛类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持(类型校验)，下面我们看看把类当做参数的泛型类
    1、定义个类
    2、把类作为参数来约束数据传入的类型
*/
/*
模拟实例：
定义一个User的类,这个类的作用就是映射数据库字段;
定义一个 MysqlDb的类这个类用于操作数据库;
把User类作为参数传入到MysqlDb中

        var user=new User({
            username:'张三',
            password:'123456'
        })

        var Db=new MysqlDb();
        Db.add(user);
*/
//把类作为参数来约束数据传入的类型 
//添加用户
var User1 = /** @class */ (function () {
    function User1() {
    }
    return User1;
}());
var MysqlDb1 = /** @class */ (function () {
    function MysqlDb1() {
    }
    MysqlDb1.prototype.add = function (user) {
        console.log("MysqlDb1--add(user: User)");
        console.log(user);
        return true;
    };
    return MysqlDb1;
}());
var u = new User1();
u.username = '张三';
u.pasword = '123456';
var Db1 = new MysqlDb1();
Db1.add(u);
//添加新闻信息
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());
var MysqlDb2 = /** @class */ (function () {
    function MysqlDb2() {
    }
    MysqlDb2.prototype.add = function (info) {
        console.log("MysqlDb2--add(info:ArticleCate)");
        console.log(info);
        return true;
    };
    return MysqlDb2;
}());
var a = new Article();
a.title = "国内";
a.desc = "国内新闻";
a.status = 1;
var Db2 = new MysqlDb2();
Db2.add(a);
// 上边代码问题：代码重复。 
// 解决方法：定义操作数据库的泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log("MysqlDb--add(info: T)");
        console.log(info);
        return true;
    };
    MysqlDb.prototype.updated = function (info, id) {
        console.log("MysqlDb--updated(info: T, id: number)");
        console.log("id:" + id);
        console.log(info);
        return true;
    };
    return MysqlDb;
}());
//增加 User 数据
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '张三';
u.pasword = '123456';
var Db = new MysqlDb();
Db.add(u);
//增加 ArticleCate 数据
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
//新增数据
var a = new ArticleCate({
    title: '分类',
    desc: '1111',
    status: 1
});
var db1 = new MysqlDb();
db1.add(a);
//修改数据
var a = new ArticleCate({
    title: '分类111',
    desc: '2222'
});
a.status = 0;
var db2 = new MysqlDb();
db2.updated(a, 12);
