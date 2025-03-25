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

async function runWithLimit(tasks, limit) {
  for (let i = 0; i < limit; i++) {
    console.log(await tasks[i]());
  }

}

runWithLimit(tasks, 3).then(console.log);

