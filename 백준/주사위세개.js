const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(" ");
const dict = {}

for (const a of input){
    dict[a] = dict[a] ? dict[a] + 1 : 1
}

for (const [key , value] of Object.entries(dict)){
    if (value === 3) return console.log(10000 + (key * 1000))
    if (value === 2) return console.log(1000 + (key * 100))
}
console.log(Math.max(...(input.map((a)=> +a))) * 100)