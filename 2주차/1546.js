const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    Solution();
})

function Solution() {
    let answer = Number(0);
    let N = Number(input[0]);
    score = input[1].split(' ');

    // 최대 점수 찾기
    let MAX = Number(score[0]);
    for (let i = 0; i < score.length; i++) {
        if (Number(score[i]) > Number(MAX))
            MAX = score[i];
    }

    // 점수들 조작
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum += score[i] / MAX * 100;
    }

    answer = sum / N;

    console.log(answer);
}