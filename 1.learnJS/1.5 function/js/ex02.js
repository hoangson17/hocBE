//IIFE (áp dụng cho function dùng 1 lần)
(function (message) {
    console.log(message);
})("Unicode");

//đệ quy
// gọi lại chính hàm đang định nghĩa 
// giải quyết các bài toán lặp
// trong web thường đc xử lý các bài toán đa cấp 
// xác định được dk dừng ===> vô hạn


// function showNumber(n){
//     if(n>1){
//         showNumber(n-1)
//     }
//     console.log(n);
// }

// showNumber(10);

// function getTotal(n){
//     if(n <= 0){
//         return 0;
//     }
//     return getTotal(n-1)+n;
// }
// console.log(getTotal(1));

// closure 

// function display(){
//     // function getMessage(){
//     //     console.log("unicode");
//     // }
//     // return getMessage;

//     // or 

//     return function(){
//         console.log("unicode");
//     }

// }
// // display()();

// const getMessage = display();
// console.log(getMessage);

// bài toán :hiển thị 3 phép toán sau 
// 5+1 = 
// 5+2=
// 5_+ 10 =
// function sum(a){
//     return function(b){
//         return a+b;
//     }
// }
// const adder = sum(5);
// console.log(adder(1));
// console.log(adder(5));
// console.log(adder(10));


const menu = [
    {
        id: 1,
        title: "menu 1",
        parent: 0
    },
    {
        id: 2,
        title: "menu 2",
        parent: 0
    },
    {
        id: 3,
        title: "menu 3",
        parent: 0
    },
    {
        id: 4,
        title: "menu 2.1",
        parent: 2
    },
    {
        id: 5,
        title: "menu 2.2",
        parent: 2
    },
    {
        id: 6,
        title: "menu 2.3",
        parent: 2
    },
    {
        id: 7,
        title: "menu 2.2.1",
        parent: 5
    },
    {
        id: 8,
        title: "menu 2.2.2",
        parent: 5
    },
]
// console.log(menu);


// const newArr = [];
// for(let i = 0;i<menu.length;i++){
//     //lấy tất cả các menuItem cá parent = 0;
//     if(menu[i].parent === 0 ){
//         //thêm các menu item tìm được vào mảng newArr
//         newArr[newArr.length] = menu[i];
//         for(let j = 0 ; j< menu.length;j++){
//             if(menu[j].parent === menu[i].id){
//                 console.log(menu[i].id);
//                 if(!menu[i].children){
//                     menu[i].children = [];
//                 }
//                 const menuChildren = menu[i].children;
//                 menuChildren[menuChildren.length] = menu[j];
//             }
//         }
//     }
// }
// console.log(newArr);    



const getMenuTree = function (menuData, parentId = 0) {
    const newArr = [];
    for (let i = 0; i < menuData.length; i++) {
        if (menuData[i].parent === parentId) {
            newArr[newArr.length] = menuData[i];
            const children = getMenuTree(menuData, menuData[i].id);
            console.log(children);
            if(children.length){
                menuData[i].children = children;
            }
        }
    }
    return newArr;

}
const result = getMenuTree(menu);
console.log(result);