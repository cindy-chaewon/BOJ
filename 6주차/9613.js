const fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const iter = Number(inputs.shift());

let ans = [];

// 유클리드 호제법
function getGCD(a, b){

    while(a % b !== 0){
        let r = a % b;

        if(r !== 0){
            a = b;
            b = r;
        }
    }

    return b;
}

for(let i = 0; i < iter; i++){
    let input = inputs[i].trim().split(" ").map((item) => Number(item));

    let newIter = input.shift();

    
    input.sort((a ,b) => b - a);

    let sum = 0;

 
    for(let j = 0; j < newIter - 1; j++){
        let a = input[j];

       
        for(let k = j + 1; k < newIter; k++){
            let b = input[k];

           
            let GCD = getGCD(a, b);

            sum += GCD;
        }
    }

    ans.push(sum);
}

console.log(ans.join("\n"));