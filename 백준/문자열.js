// const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const input = ['3',
    'ACDKJFOWIEGHE',
    'O',
    'AB']
input.shift()
console.log(input)
for (const a of input){
    console.log(`${a[0]}${a[a.length - 1]}`)
}
