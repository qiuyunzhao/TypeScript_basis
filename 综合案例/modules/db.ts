/*
功能：定义一个操作数据库的库  支持 Mysql Mssql  MongoDb

要求1：Mysql MongoDb功能一样  都有 add  update  delete  get方法    

注意：约束统一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口 ，需要代码重用所以用到泛型

    1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

    2、泛型：通俗理解：泛型就是解决 类 接口 方法的复用性、
*/

export {
    MysqlDb,
    MongoDb
}



interface DBI<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}




//定义一个操作mysql数据库的类  注意：要实现泛型接口,这个类也应该是一个泛型类
class MysqlDb<T> implements DBI<T>{

    constructor() {
        console.log('数据库Mysql建立连接');
    }

    add(info: T): boolean {
        console.log('Mysql ---- add()');
        console.log(info);
        return true;
    }

    update(info: T, id: number): boolean {
        console.log('Mysql ---- update()');
        return true;
    }

    delete(id: number): boolean {
        console.log('Mysql ---- delete()');
        return true;
    }

    get(id: number): any[] {
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
        ]
        return list;
    }

}




//定义一个操作Mongo数据库的类 
class MongoDb<T> implements DBI<T>{

    constructor() {
        console.log('数据库Mongo建立连接');
    }

    add(info: T): boolean {
        console.log('Mongo ---- add()');
        console.log(info);
        return true;
    }

    update(info: T, id: number): boolean {
        console.log('Mongo ---- update()');
        return true;
    }

    delete(id: number): boolean {
        console.log('Mongo ---- delete()');
        return true;
    }

    get(id: number): any[] {
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
        ]
        return list;
    }

}