const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");

for (let i = 0; i < input.length; i++){
    const [ a , b ] = input[i].split(' ').map((a)=> +a)
    console.log(a+b)
}