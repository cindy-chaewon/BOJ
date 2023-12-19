const fs = require('fs');

const readFileSyncAddress = 'input.txt';

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');


function solution(input) {
    [n, m] = input[0].split(' ');
    const N = Number(n);
    const M = Number(m);
    let result = '';
    const output = [];
    const visited = new Array(N).fill(false);

    function dfs(count) {
        if (count === M) {
            result += `${output.join(' ')}\n`;
            return;
        }

        for (let i = 0; i < N; i++) {
            if (visited[i] === true) continue;
            visited[i] = true;
            output.push(i + 1);
            dfs(count + 1);
            output.pop();
            visited[i] = false;
        }
    }

    dfs(0);
    return result;
}

console.log(solution(input));