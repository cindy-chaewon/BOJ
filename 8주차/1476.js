const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line)=>{
  const [E,S,M] = line.split(' ').map(v=>+v);
  let Y = 1;
  while(1){
    if((Y-E)%15==0 && (Y-S)%28==0 && (Y-M)%19==0){
      console.log(Y)
        process.exit();
    }else{
      Y++;
    }
  }
});