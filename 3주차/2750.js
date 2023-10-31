const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let N = 0;
let input = [];
let result = [];
rl.on('line',function(line){
    if(N === 0){
        N = line;
    } else {
        input.push(line);
        if(input.length === parseInt(N)){
            result = Array.from(new Set(input)).sort((a,b)=> a- b);
            result.forEach(e => console.log(e));
            rl.close();
        }
    } 
});