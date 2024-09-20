const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");

console.log(input[1].split('').reduce((acc , crr)=> acc + + crr , 0))