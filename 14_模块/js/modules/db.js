"use strict";
// // 导出方式1：export关键字分别导出
// export var dbUrl = 'xxxxxx111';
Object.defineProperty(exports, "__esModule", { value: true });
var dbUrl = 'xxxxxx222';
exports.dbUrl = dbUrl;
function getData() {
    console.log('获取数据库的数据222');
    return [
        {
            title: '121312'
        },
        {
            title: '121312'
        }
    ];
}
exports.getData = getData;
function save() {
    console.log('保存数据成功222');
}
exports.save = save;
