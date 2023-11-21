var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var cases = Number(input[0]);
var stack = [];
var answer ='';
for(var i=1; i<=cases; i++){
    var splited = input[i].split('');
    stack.push(splited[0]);
    for(var j=1; j<splited.length; j++){
        if(stack[stack.length-1] === '(' && splited[j] === ')'){
            stack.pop();
        }else{
            stack.push(splited[j]);
        }
    }
    if(stack.length === 0){
        answer += 'YES' +'\n';
    }else{
        answer += 'NO' +'\n';
    }
    stack=[];
}
console.log(answer);