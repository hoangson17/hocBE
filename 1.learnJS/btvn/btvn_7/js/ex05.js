const watchHistory = [
    { userId: 1, videoId: "A1", duration: 10 },
    { userId: 2, videoId: "B1", duration: 15 },
    { userId: 1, videoId: "A1", duration: 20 },
    { userId: 3, videoId: "C1", duration: 30 },
    { userId: 2, videoId: "B1", duration: 5 },
    { userId: 1, videoId: "A2", duration: 25 },
    { userId: 3, videoId: "C1", duration: 15 },
  ];


// Viết các hàm thực hiện các yêu cầu sau:

// Tính tổng thời gian xem của từng video.
let report = {};
watchHistory.forEach((item)=>{
  if(!report[item.videoId]){
    report[item.videoId] = item.duration; 
  }else{
    report[item.videoId] += item.duration; 
  }
})
console.log(report);

// Tìm video được xem nhiều nhất (dựa trên tổng thời gian).
let max = Object.entries(report).reduce((acc,cur)=>{
    if(acc < cur){
      acc = cur;
    }
    return acc;
})
console.log(max);

// Nhóm lịch sử xem theo userId, trong đó mỗi userId sẽ chứa danh sách các video mà họ đã xem và tổng thời gian xem mỗi video.
let historyList = {};
watchHistory.forEach((item)=>{
  if(!historyList[item.userId]){
    historyList[item.userId] = item;
  }else{ 
    if(!historyList[item.userId]["videoId"]){
     
    }
    else if(!Array.isArray(historyList[item.userId])){
      historyList[item.userId] = [historyList[item.userId]];
      
    }historyList[item.userId].push(item);
  }
})
console.log(historyList);

