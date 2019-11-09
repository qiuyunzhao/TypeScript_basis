
// // 导出方式1：export关键字分别导出
// export var dbUrl = 'xxxxxx111';


// export function getData(): any[] {

//     console.log('获取数据库的数据111');

//     return [
//         {
//             title: '121312'
//         },
//         {
//             title: '121312'
//         }
//     ]

// }

// export function save() {
//     console.log('保存数据成功111');
// }



// 导出方式2：export关键字 统一导出所需
export {
    dbUrl,
    getData,
    save
}

var dbUrl = 'xxxxxx222';

function getData(): any[] {

    console.log('获取数据库的数据222');

    return [
        {
            title: '121312'
        },
        {
            title: '121312'
        }
    ]

}

function save() {
    console.log('保存数据成功222');
}