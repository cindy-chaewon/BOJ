const fs = require('fs');
const { resourceUsage } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const n = input[0].split(' ')[1]

const list = input[1].split(' ').map((x) => +x).sort((a, b) => b - a)

console.log(list[n - 1])