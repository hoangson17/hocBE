
const getText = function () {
    // let keyWord = document.getElementById("txt_search").value;
    let keyWord = "a";
    let content = document.getElementById("content").textContent;
    let position = content.toLowerCase().indexOf(keyWord.toLowerCase());
    let newContent = ''
    let highLight = content.slice(position, position + keyWord.length);

    while (position !== -1) {
        newContent += content.slice(0, position) + `<span>${highLight}</span>`;
        //Xóa bỏ content đã xử lý
        content = content.slice(position + keyWord.length);
        position = content.toLowerCase().indexOf(keyWord.toLowerCase());
    }
    newContent += content;
    return newContent;
}

document.getElementById("content").innerHTML = getText()