// let keyWord = document.getElementById("txt_search").value;
let keyWord = "lorem";
let content = document.getElementById("content").textContent;

const position = content.toLowerCase().indexOf(keyWord.toLowerCase());
console.log(content.charAt(position));
const getText = function(){
    let highLight = content.charAt(position) + content.slice(position);
    while(position > -1){
        
    }
    return highLight;
}
console.log(getText());