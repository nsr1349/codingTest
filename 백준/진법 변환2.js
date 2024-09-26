// const [n ,b] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(" ");
const [n ,b] = ['60466175','36']
const numList = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let B = +b, 
    N = +n, 
    t = 1, 
    answer = ''

while (t <= N) t *= B

while (t !== 1) {
    t /= B
    answer += numList[Math.floor(N / t) ]
    N = N % t
}

console.log(answer) 