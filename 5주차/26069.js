const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const dance = new Set(['ChongChong']);

function processInput(i, n) {
  if (i <= n) {
    rl.question('', (line) => {
      const [a, b] = line.trim().split(' ');

      if (dance.has(a) || dance.has(b)) {
        dance.add(a);
        dance.add(b);
      }

      processInput(i + 1, n);
    });
  } else {
    console.log(dance.size);
    rl.close();
  }
}

rl.question('', (nInput) => {
  const n = parseInt(nInput);
  processInput(1, n);
});
