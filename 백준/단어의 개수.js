const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

console.log(input === '' ? 0 : input.trim().split(' ').length)