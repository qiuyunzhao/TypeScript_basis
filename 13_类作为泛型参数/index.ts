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
class User1 {
    public username: string | undefined;
    pasword: string | undefined;
}

class MysqlDb1 {
    add(user: User): boolean {
        console.log("MysqlDb1--add(user: User)");
        console.log(user);
        return true;
    }
}

var u = new User1();
u.username = '张三';
u.pasword = '123456';
var Db1 = new MysqlDb1();
Db1.add(u);


//添加新闻信息
class Article {
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined
}

class MysqlDb2 {
    add(info: ArticleCate): boolean {
        console.log("MysqlDb2--add(info:ArticleCate)");
        console.log(info);
        return true;
    }
}

var a = new Article();
a.title = "国内";
a.desc = "国内新闻";
a.status = 1;
var Db2 = new MysqlDb2();
Db2.add(a);



// 上边代码问题：代码重复。 
// 解决方法：定义操作数据库的泛型类
class MysqlDb<T>{

    add(info: T): boolean {
        console.log("MysqlDb--add(info: T)");
        console.log(info);
        return true;
    }

    updated(info: T, id: number): boolean {
        console.log("MysqlDb--updated(info: T, id: number)");
        console.log("id:" + id);
        console.log(info);
        return true;
    }
}

//增加 User 数据
class User {
    username: string | undefined;
    pasword: string | undefined;
}
var u = new User();
u.username = '张三';
u.pasword = '123456';
var Db = new MysqlDb<User>();
Db.add(u);

//增加 ArticleCate 数据
class ArticleCate {
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined;
    constructor(params: {
        title: string | undefined,
        desc: string | undefined,
        status?: number | undefined
    }) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
}

//新增数据
var a = new ArticleCate({
    title: '分类',
    desc: '1111',
    status: 1
});
var db1 = new MysqlDb<ArticleCate>();
db1.add(a);

//修改数据
var a = new ArticleCate({
    title: '分类111',
    desc: '2222'
});
a.status = 0;
var db2 = new MysqlDb<ArticleCate>();
db2.updated(a, 12);