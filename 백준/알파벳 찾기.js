const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const 알파벳 = 'abcdefghijklmnopqrstuvwxyz'

console.log(알파벳.split('').map((a)=> input.indexOf(a)).join(' '))