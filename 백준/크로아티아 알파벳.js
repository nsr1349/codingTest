let input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const 크로아티아문자들 = ['c=', 'c-', 'dz=' , 'd-' , 'lj', 'nj', 's=', 'z=']
let answer = 0

for (const a of 크로아티아문자들){
    const temp = input.split(a)
    answer += temp.length - 1
    input = temp.join(' ')
}

console.log(answer + input.replaceAll(' ','').length)