import { UserClass, UserModel } from './model/user';
import { ArticleClass, ArticleModel } from './model/article';

//增加数据到Mysql
var u = new UserClass();
u.username = '张三';
u.password = '12345655654757';
UserModel.add(u);

//获取Mysql中user表数据
var res = UserModel.get(123);
console.log(res);

//增加数据到Mongo
var a = new ArticleClass();
a.title = '老人与海';
a.desc = '作者海明威';
ArticleModel.add(a);

//获取Mongo中文章表的数据
var aRes = ArticleModel.get(1);
console.log(aRes);
