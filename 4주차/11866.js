const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');
let num = []; //num 배열 생성
input.forEach((e)=>{ //입력값 각각 Number로 변환하여 배열 생성
    num.push(Number(e));
})

let arr = []; //arr배열 생성
for(let i = 1; i <= num[0]; i++){ //1~N값 넣어주기
    arr.push(i);
}
let result = "<";
for (let j = 0; j < num[0]; j++) {
    let i = num[1] - 1; 
    while (i-- > 0) { //K까지
        let tmp = arr.shift(); //저장했다가
        arr.push(tmp); //다시 넣어주기
    }
    result += arr.shift(); //i = 0일 때 - 즉 K번째 일때 삭제 후 result에 값 넣어주기
    if(arr.length == 0) //다 빼줬으면
        result += ">";
    else
        result += ", ";
}
console.log(result);