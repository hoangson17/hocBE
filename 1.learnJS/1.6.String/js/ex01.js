// // String 
// let massage = "unicode";
// console.log(massage,typeof massage);


// console.log(String.prototype); 
// // let fullName = "hoang an";
// // console.log(fullName.toLowerCase());

// // const email = 'hoangan.web@gmail.com';
// // console.log(email.slice(0,email.indexOf('@')));

// let fullName = "TRAN HOANG SON";

// if(fullName === fullName.toUpperCase()){
//     console.log('đúng')
// }else{
//     console.log('sai')
// }



//Nguyên tắc xử lý chuỗi --> 3 phần
//Ví dụ
let keyword = "trình";
let content = `Học lập trình không khó`;

//B1: Tìm vị trí
const position = content.toLowerCase().indexOf(keyword.toLowerCase());

//B2: Tách 3 phần
// Phần 1: Từ đầu đến vị trí tìm được
// Phần 2: Đối tượng cần xử lý
// Phần 3: Phần sau đối cần xử lý đến hết

if (position !== -1) {
  let newContent =
    content.slice(0, position) +
    keyword.toUpperCase() +
    content.slice(position + keyword.length);
  console.log(newContent);
}

let fullName = "tạ hoàng an";
fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
for (let i = 0; i < fullName.length; i++) {
  const char = fullName.charAt(i);
  const charNext = fullName.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    const position = i + 1;
    fullName =
      fullName.slice(0, position) +
      fullName.charAt(position).toUpperCase() +
      fullName.slice(position + 1);
  }
}
console.log(fullName);