//직사각형에서 탈출
const [ x, y, w, h] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(" ").map(a=>+a)

console.log(Math.min(Math.abs(x-w), Math.abs(y-h), x, y))