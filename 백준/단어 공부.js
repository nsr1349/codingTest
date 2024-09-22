const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

const word = input.toUpperCase()
const dict = {}
let max = 0
let maxWords = []

for (const a of word) dict[a] = dict[a] ? dict[a] + 1 : 1


for (const [alphabet , count] of Object.entries(dict)){
    if (max < count){
        max = count
        maxWords = [alphabet]
    }else if (max === count){
        maxWords.push(alphabet)
    }
}
console.log(maxWords.length === 1 ? maxWords[0] : '?')
