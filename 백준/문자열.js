const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
input.shift()

for (const a of input) console.log(`${a[0]}${a[a.length - 1]}`)

