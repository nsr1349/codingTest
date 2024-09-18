const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map((a)=> +a )
const dict = {}

for (const a of input){
    const 나머지 = a % 42
    if (!dict[나머지]) dict[나머지] = 1
}

console.log(Object.keys(dict).length )