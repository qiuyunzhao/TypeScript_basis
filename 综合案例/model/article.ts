
import {MongoDb} from '../modules/db';

//定义数据库的映射
class ArticleClass{
    title:string | undefined;
    desc:string | undefined;
}

//绑定MongoDb
var ArticleModel=new MongoDb<ArticleClass>();

export {
    ArticleClass,ArticleModel
}