const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

console.log(input.slice(0,input.length/2) === input.slice(Math.ceil(input.length/2)).split('').reverse().join('') ? 1 : 0)