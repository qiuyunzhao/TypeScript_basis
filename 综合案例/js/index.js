"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./model/user");
var article_1 = require("./model/article");
//增加数据到Mysql
var u = new user_1.UserClass();
u.username = '张三';
u.password = '12345655654757';
user_1.UserModel.add(u);
//获取Mysql中user表数据
var res = user_1.UserModel.get(123);
console.log(res);
//增加数据到Mongo
var a = new article_1.ArticleClass();
a.title = '老人与海';
a.desc = '作者海明威';
article_1.ArticleModel.add(a);
//获取Mongo中文章表的数据
var aRes = article_1.ArticleModel.get(1);
console.log(aRes);
