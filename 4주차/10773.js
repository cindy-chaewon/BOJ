const stack = [];
let result = 0;

for(let i = 0; i <N; i++) {
    //
    if(input[i] !== 0){
        stack.push(input[i]);      
        result += input[i];
    }else{
        result -= stack.pop();
    };
};

console.log(result)