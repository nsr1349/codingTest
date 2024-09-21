const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(" ")

console.log(Math.max(...input.map((a)=> + a.split('').reverse().join(''))))