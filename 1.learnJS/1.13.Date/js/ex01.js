// console.log(Date.prototype); //UTC múi giờ quốc tế
const date = new Date();
// console.log(date);

// console.log('ngày:',date.getDate());
// console.log('thứ:',date.getDay()+1);
// console.log('tháng: ',date.getMonth()+1);
// console.log('năm: ',date.getFullYear());
// console.log('giờ: ',date.getHours());
// console.log('phút: ',date.getMinutes());
// console.log('giây: ',date.getSeconds());
// console.log('mini giây: ',date.getMilliseconds());
// console.log('Time: ',date.getTime()); // lấy từ 1970 đến hiện tại

// console.log(`giờ UTC`,date.getUTCHours());

// năm tháng ngày giờ phút giây
const tomorrow = new Date("2025-03-21 09:30:35");
// tomorrow.setHours(11);
// console.log(tomorrow);
// console.log(tomorrow.getHours());
// console.log(tomorrow.getTime());


// bài tập tính số giờ số phút số giây còn lại từ thời điểm hiện tạo đến thời điểm tomorow

setInterval(() => {
    const now = new Date();
    let timeDiff = (tomorrow.getTime() - now.getTime()) / 1000;
    const days = Math.floor(timeDiff / 86400);
    timeDiff -= days * 86400;
    const hours = Math.floor(timeDiff / 3600);
    timeDiff -= hours * 3600;
    const minutes = Math.floor(timeDiff / 60);
    const seconds = Math.floor(timeDiff - minutes * 60);
    // console.log(days);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    document.body.innerHTML = `<h1>ngày: ${days},giờ: ${hours},phút: ${minutes},giây: ${seconds}</h1>`
}, 1000)


// Regular Expression