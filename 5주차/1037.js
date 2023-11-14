const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const sortedInput = input[1].sort((a, b) => a - b);
  console.log(sortedInput[0] * sortedInput[sortedInput.length - 1]);
  process.exit();
});
