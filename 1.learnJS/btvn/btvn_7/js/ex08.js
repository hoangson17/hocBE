const reviews = [
    { productId: "P1", userId: "U1", rating: 5 },
    { productId: "P2", userId: "U2", rating: 4 },
    { productId: "P1", userId: "U3", rating: 3 },
    { productId: "P3", userId: "U1", rating: 4 },
    { productId: "P2", userId: "U3", rating: 2 },
    { productId: "P1", userId: "U2", rating: 4 },
  ];
//   Viết các hàm thực hiện các yêu cầu sau:
  
//   Tính điểm trung bình đánh giá của mỗi sản phẩm.
let averageRating = {};
reviews.forEach((item)=>{
    if(!averageRating[item.productId]){
        averageRating[item.productId] = item.rating;
    }else{
        if(!Array.isArray(averageRating[item.productId])){
            averageRating[item.productId] = [averageRating[item.productId]];
        }averageRating[item.productId].push(item.rating);
    }
})
Object.entries(averageRating).forEach((item)=>{
    let avg = 0;
    if(Array.isArray(item[1])){
        for(let i = 0;i < item[1].length;i++){
           avg += item[1][i] / item[1].length;
        }
        averageRating[item[0]] = avg;
    }else{
        averageRating[item[0]] = item[1];
    }
})
console.log(averageRating);

//   Tìm sản phẩm có điểm trung bình cao nhất.
console.log(Object.entries(averageRating).sort((a,b)=>{
    return b[1] - a[1];
})[0]);

//   Nhóm danh sách đánh giá theo productId, trong đó mỗi sản phẩm có danh sách đánh giá của từng người dùng.

let reviewList = {};
reviews.forEach((item)=>{
    if(!reviewList[item.productId]){
        reviewList[item.productId] = item;
    }else{
        if(!Array.isArray(reviewList[item.productId])){
            reviewList[item.productId] = [reviewList[item.productId]];
        }reviewList[item.productId].push(item);
    }
})
console.log(reviewList);