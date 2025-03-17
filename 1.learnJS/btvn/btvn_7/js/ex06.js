const matches = [
  { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
  { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
  { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
  { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
  { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
];
//   Viết các hàm thực hiện các yêu cầu sau:
  
//   Tính số trận thắng, hòa, thua của mỗi đội.
let win = {A:0,B:0,C:0,D:0};
let lost = {A:0,B:0,C:0,D:0};
let draw = {A:0,B:0,C:0,D:0};
matches.forEach((item)=>{
  if(item.scoreA > item.scoreB){
    win[item.teamA] ++;
    lost[item.teamB] ++;
  }else if(item.scoreA < item.scoreB){
    lost[item.teamA] ++;
    win[item.teamB] ++;
  }else{
    draw[item.teamA] ++;
    draw[item.teamB] ++;
  }
})
console.log(win);
console.log(lost);
console.log(draw);

//   Xếp hạng các đội bóng theo số điểm, với quy tắc:
//   Thắng: +3 điểm
//   Hòa: +1 điểm
//   Thua: +0 điểm

let rank = {};
matches.forEach((item)=>{
  if( !rank[item.teamA]){
    rank[item.teamA] = 0
  }
  if( !rank[item.teamB]){
    rank[item.teamB] = 0
  }
  if(item.scoreA > item.scoreB){
    rank[item.teamA] += 3;
  }else if(item.scoreA < item.scoreB){
    rank[item.teamB] += 3;
  }else{
    rank[item.teamA] += 1;
    rank[item.teamB] += 1;
  }
})

console.log(Object.entries(rank).sort((a,b)=>{
  return b[1] - a[1];
}));

//   Tìm đội có số bàn thắng nhiều nhất.
let topScore = {A:0,B:0,C:0,D:0};
let getTopScore = matches.forEach((item)=>{
    topScore[item.teamA] += item.scoreA;
    topScore[item.teamB] += item.scoreB;
})
console.log(Object.entries(topScore).sort((a,b)=>{
  return b[1] - a[1];
})[0]);
