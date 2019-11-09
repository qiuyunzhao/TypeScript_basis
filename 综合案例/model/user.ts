
import { MysqlDb } from '../modules/db';

//定义数据库的映射
class UserClass {
    username: string | undefined;
    password: string | undefined;
}


//绑定MysqlDb
var UserModel = new MysqlDb<UserClass>();
export {
    UserClass, UserModel
}
