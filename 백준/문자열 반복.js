const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
input.shift()

for (const a of input){
    const [num , word] = a.split(' ')
    console.log(word.split('').reduce((acc,crr)=> acc + crr.repeat(+num) , ''))
}
