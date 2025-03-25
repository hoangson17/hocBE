function fetchUser() {
    return new Promise((resolve) => setTimeout(() => resolve("User Data"), 2000));
}

function fetchPosts() {
    return new Promise((resolve) => setTimeout(() => resolve("Post Data"), 3000));
}

function fetchComments() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Comment Data"), 1000) 
    );
}

// Yêu cầu:

// Dùng Promise.all để lấy kết quả từ cả 3 Promise.
// Tính tổng thời gian chạy của cả 3 Promise.

function getData(){
    let getStart = new Date().getSeconds();
    Promise.all([fetchUser(),fetchPosts(),fetchComments()]).then((value)=>{
        let getEnd = new Date().getSeconds();
        console.log(value);
        console.log(getEnd - getStart);
    })

}

getData();