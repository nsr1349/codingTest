const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map((a=> +a))

const 출석부 = {}

for (let i = 1; i < 31; i++) 출석부[i] = null

for (const a of input) delete 출석부[a];

for (const a of Object.keys(출석부)) console.log(a)