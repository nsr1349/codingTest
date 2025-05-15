const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

console.log(input.toString().split('').map(a=> +a).sort((a,b)=> b-a).join(''))