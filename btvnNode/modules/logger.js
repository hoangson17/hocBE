const path = require('path');
const fs = require('fs');
const url = require('url');

function logger(req) {
    const filePath = path.join(__dirname, '../data/log.txt');
    const time = new Date().toISOString(); // lấy giờ hiện tại
    const method = req.method;
    const urlParsed = url.parse(req.url, true);

    const log = `${method} - ${urlParsed.pathname} - ${time}\n`;

    fs.appendFile(filePath, log, (err) => {
        if (err) {
            console.error('Lỗi khi ghi log:', err);
        }
    });
}

module.exports = logger;