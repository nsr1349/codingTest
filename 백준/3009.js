// 네 번째 점
const [a,b,c] = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map(a=> a.split(' '))

const 다른거 = (a,b,c) => {
    if (a===b) return c
    if (c===b) return a
    if (a===c) return b
}

console.log(다른거(a[0], b[0], c[0]),다른거(a[1], b[1], c[1]))