const tasks = Array.from(
  { length: 10 },
  (_, i) => () =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(`Task ${i + 1} hoàn thành`),
        Math.random() * 3000
      )
    )
);
// Giả sử bạn có 10 API cần gọi nhưng muốn giới hạn tối đa chỉ 3 API chạy cùng lúc. Viết một hàm runWithLimit(tasks, limit) để đảm bảo điều này.

// Chỉ chạy tối đa limit Promise cùng lúc.
// Khi một Promise hoàn thành, một Promise mới được thêm vào.

function runWithLimit(tasks, limit) {
  return new Promise((resolve)=>{
    let runningCount = 0;
    let index = 0;
    let results = [];

    function next(){
      if(index >= tasks.length&&runningCount === 0){
        resolve(results);
        return;
      }
      while(runningCount < limit && index<tasks.length){
        let currentIndex = index;
        let task = tasks[index++];
        runningCount++; //tăng số lượng task đang chạy

        task().then(result=>{
          results[currentIndex] = result;
        }).catch(error =>{
          results[currentIndex] = error;
        }).finally(()=>{
          runningCount--;
          next();
        })
      }
    }
    next();
  })
}

runWithLimit(tasks, 3).then(console.log);

