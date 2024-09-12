const input = +require('fs').readFileSync(0, 'utf-8').toString().trim() + 1
let answer = 0
for (let i = 1; i < input; i ++) answer += i

console.log(answer)