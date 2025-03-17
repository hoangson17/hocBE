const students = [
    { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
    { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
    { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];

// Tính điểm trung bình của từng học viên.

students.map((item)=>{
    let score = item.scores;
    item['average'] = (score.english+score.math+score.science)/3;
})
console.log(students);

// Tìm học viên có điểm trung bình cao nhất.
let max = 0;
students.map((item)=>{
    if(item.average >= max){
        max = item;
    }
})
console.log(max);

// Sắp xếp danh sách học viên theo điểm trung bình giảm dần.
let arrange = students.sort((a,b)=>{
        return b.average - a.average; 
});


console.log(arrange);