const employees = [
    { id: 1, name: "An", projects: ["P1", "P2"] },
    { id: 2, name: "Bình", projects: ["P2", "P3"] },
    { id: 3, name: "Châu", projects: ["P1", "P3", "P4","P3"] },
    { id: 4, name: "Dũng", projects: ["P4"] },
  ];
//   Viết các hàm thực hiện các yêu cầu sau:
  
//   Nhóm nhân viên theo dự án, sao cho mỗi dự án có danh sách nhân viên tham gia.
//   Chuyển đổi dữ liệu về dạng object, trong đó key là projectId, value là danh sách nhân viên thuộc dự án đó.
let project = {};
employees.forEach((item)=>{
    for(let i = 0 ; i< item.projects.length;i++){
        if(!project[item.projects[i]]){
            project[item.projects[i]] = item;
        }else{
            if(!Array.isArray(project[item.projects[i]])){
                project[item.projects[i]] = [project[item.projects[i]]]
            }
            project[item.projects[i]].push(item);
        }
    }
})
console.log(project);

//   Tìm dự án có nhiều nhân viên tham gia nhất.
console.log(Object.entries(project).sort((a,b)=>{
    return b[1].length - a[1].length;
})[0]);

