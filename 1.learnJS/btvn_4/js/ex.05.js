let fullNames = ['Nguyễn Đình Văn', 'Tạ Hoàng An', 'Tô Anh Dũng', 'Nguyễn Văn Anh'];


let bubbleSort = function (arr) {
    let temp;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length -i-1 ; j++) {
            let position = arr[j].lastIndexOf(" ");
            let position2 = arr[j+1].lastIndexOf(" ");
            if (arr[j].substring(position+1) > arr[j+1].substring(position2+1)) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(fullNames));

