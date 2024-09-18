const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n")[1].split(' ').map((a)=> +a)
const max = Math.max(...input)

console.log(input.map((a)=> a/max*100).reduce((acc,crr)=> acc + crr ,0) / input.length)
