const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ")

console.log(input.reduce((a, c)=> a + (+c) , 0))