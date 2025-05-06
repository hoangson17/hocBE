// biểu thức chính quy : biểu thức được sử dụng để sử lý chuỗi
// pattern : /kyhieu/modifier

// tác dụng:
// 1. so khớp  --> pattern.test("chuỗi"); 
// 2. cắt chuỗi 
// 3. thay thế

// const pattern = /hoangson/g;
// console.log(pattern ); //là object

// const pattern2 = new RegExp("hoangson","g");
// console.log(pattern2);


// các ký hiệu cơ bản

/*
- chuỗi bất kì --> kiểm tra xem chuỗi đó có nằm trong chuỗi chúng ta cần tìm không
- ^ --> khớp đầu chuỗi
- $ --> khớp cuối chuỗi
- [A-Z] --> chữ hoa 
- [a-z] --> chữ thường 
- [0-9] --> số 
- [char-list] --> danh sách các ký tự muốn kiểm tra

 ** lưu ý: nếu dùng [], các biểu thức ở bên trong kết hợp với nhau theo điều kiện hoặc
 ** viết ở ngoài kêt hợp với nhau theo điều kiện và ,đúng thứ tự
 ** mặc định các biểu thức sẽ khớp độ dài là 1

 cú pháp khớp độ dài:
 {n} -->độ dài cố định n
 {min,} -->độ dài >= min
 {min,max} --> độ dài từ min - max


 cú pháp viết tắt của độ dài 
 + --> {1,}
 * --> {0,}
 ? -- >{0,1}

 các kí hiệu đặc biệt: là kí hiệu của biểu thức chính quy
 . --> khớp tất cả ký tự
 [  
 ]
 +
 ?
 *
 /
 ...
 ---> muốn kiểm tra thì ký tự \ ở phía trước


 Hoặc: |  --> kết hợp với () để đạt kết quả chính xác
 Phủ định: ^(viết trong biểu thức)


 Greedy (tham lam): khi dùng dấu . ---> xảy ra tình huống khớp giá trị vượt quá phạm vi mmog muốn
 
 Để khắc phụ ta dùng kỹ thuật Lazy(lười): thêm dấu ? phía sau độ dài VD: (.+?)

 các kí hiệu viết tắt khác
 \w ---> [a-zA-Z0-9]
 \W ---> [^a-zA-Z0-9]
 \d ---> [0-9]
 \D ---> [^0-9]
 \s ---> khoảng trắng
 \S ---> ngược lại \s

*/

// const str = 'tahoangan';
// // const pattern = /^hoangan/; 
// // const pattern = /hoangan$/;
// // const pattern = /[a-z]/;
// const pattern = /[a-zA-Z]/;

// const result = pattern.test(str);
// console.log(result);



// bài tập 1: kiểm tra 1 biến hợp lệ;
// const variable = 'a';
// const pattern = /^[a-zA-z$_][a-zA-z0-9$_]*$/;
// console.log(pattern.test(variable));


// const pattern = /^<[a-z0-9]+( [a-z]+ *= *"[a-zA-Z0-9-_]+")*>.*<\/[a-z0-9]+>$/;

// let p = `<p id="abc" class="aas">Unicode</p>`;

// console.log(pattern.test(p));


// phủ đinh [^0-9]+ không phải là số



// // bài tập kiểm tra email hợp lệ
// const pattern = /^[a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]+@([a-zA-Z]\.|([a-zA-z]+[A-Za-z0-9-_]*[a-zA-Z0-9]+)\.)+[a-zA-Z]{2,}$/;

// // [a-zA-Z0-9]
// let pattern1 = /^\w+$/;

// // check SDT
// let pattern2 = /^(0|\+84)\d{9}$/



// cắt chuỗi
// string.match(pattern);

//    /g lấy tất

// const content = `xin chào anh em 03030303030 và 09303030302`;
// let pattern2 = /(0|\+84)\d{9}/g;
// const result = content.match(pattern2);

// console.log(result);


// Capturing groups : kỹ thuật chụp 1 phần của biểu thức chính quy để trả về kết quả (không áp dụng global)

// const phone = "09393939333";
// const pattern = /(0|\+84)\d{9}/;
// const result = phone.match(pattern);
// console.log(result);

// Non-Capturing group : kỹ thuật loại bỉ giá trị trong ngoặc () ra khỏi kết quả

// const phone = "09393939333";
// const pattern = /(?:0|\+84)(\d{9})/;
// const result = phone.match(pattern);
// console.log(result);


// thay thế
// const content = `xin chào anh em 0303030303 và 0930303030`;
// let pattern2 = /(0|\+84)\d{9}/g;
// let newContent = content.replace(pattern2,"xxxx");
// console.log(newContent);

// group 1 ---> $1
// group 2 ---> $2
// .....

// Đối sánh chuỗi : lấy chính group trong biểu thức chính quy đưa vào giá trị sau thay thế
const content = `xin chào anh em 0303030303 và 0930303030`;
let pattern2 = /((0|\+84)\d{9})/g;
let newContent = content.replace(pattern2,`<a tel:"$1">$1</a>`)
console.log(newContent);

