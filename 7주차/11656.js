const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const suffixes = [];

for (let i = 0; i < input.length; i++) {
    const suffix = input.slice(i);
    suffixes.push(suffix);
}

suffixes.sort(); 

console.log(suffixes.join("\n"));