// Viết một hàm PromiseTimeout để tự động reject nếu promise chạy quá lâu.
// Kết quả mong muốn:

// Nếu longTask mất ≤ 2 giây, in "Xong!"
// Nếu longTask mất > 2 giây, in "Timeout Error!"
async function PromiseTimeout(promise, ms) {
    let runTime = new Promise((reject)=>{
        setTimeout(()=>{
            reject(new Error("Timeout Error!"));
        },ms)
    });

    return await Promise.race([promise,runTime]);
}

// const longTask = new Promise((resolve) =>
//     setTimeout(() => resolve("Xong!"), 5000)
// );
const longTask = new Promise((resolve) =>
    setTimeout(() => resolve("Xong!"), 1000)
);

PromiseTimeout(longTask, 2000).then(console.log).catch(console.error);