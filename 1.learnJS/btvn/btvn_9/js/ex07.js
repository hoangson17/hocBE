// Viết một hàm retryWithBackoff(fn, retries, delay) giúp thực hiện lại Promise thất bại, với mỗi lần retry sẽ tăng delay gấp đôi.

// Nếu thất bại, thử lại sau 1000ms, 2000ms, 4000ms, ... cho đến retries lần.
// Nếu vẫn thất bại sau retries lần, reject.

async function retryWithBackoff(fn, retries, delay) {
    for(let i = 0 ; i < retries;i++){
        try {
            return await fn();
        } catch (error) {
            if( i === retries -1) throw error;
            console.log("Thất bại, thử lại...");
            await new Promise((resolve)=>setTimeout(resolve,delay));
            delay *= 2;
        }
    }
}

const failingTask = () => {
    return new Promise((resolve, reject) => {
        Math.random() > 0.8
            ? resolve("Thành công!")
            : reject("Thất bại, thử lại...");
    });
};

retryWithBackoff(failingTask, 5, 1000).then(console.log).catch(console.error);