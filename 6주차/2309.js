const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
  input.push(line)
})
  .on('close', async function () {


  let answer = whitesnow(input);
  console.log(answer.sort((a,b)=>a-b).join('\n'))
  process.exit();
});

let whitesnow = function(arr){
  const sum = arr.reduce((acc,cur)=>{
    return acc+cur*1;
  },0);
  let bool = false;
  const length = arr.length;
  const diff = sum - 100;
  for(let i = 0; i<length; i++){
    let head = arr.shift();
    for(let j =0; j<length-1;j++){
      if(head*1+arr[j]*1==diff){
        bool = true;
        arr.splice(j,1);
        break;
      }
    }
    if(bool)break;
    else arr.push(head);
  }
  return arr;
}