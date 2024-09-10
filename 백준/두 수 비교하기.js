const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(" "),
        a = + input[0],
        b = + input[1]
console.log(a === b ? '==' : a < b ? '<' : '>') 
