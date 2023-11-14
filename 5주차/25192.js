const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (inp) => {
  inp.shift();
  let cnt = 0;
  let set = new Set();

  for (let i = 0; i < inp.length; i++) {
    if (inp[i] === "ENTER") {
      cnt += set.size;
      set.clear();
    } else {
      set.add(inp[i]);
    }
  }

  cnt += set.size;
  console.log(cnt);
};

const input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  solution(input);
  process.exit();
});
