const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map((a)=> '' + a)

for (const a of input[1].split('').reverse()){
    console.log(input[0] * a)
}
console.log(input[0] * input[1])

