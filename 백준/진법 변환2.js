const [n ,b] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(" ");

const B = +b
let N = +n, temp = 1, answer = ''

while (temp < N) temp *= B

while (temp !== 1) {
    temp /= B
    const a = Math.floor(N / temp) 
    answer += a > 9 ? String.fromCharCode( a+55 ) : a
    N = N % temp
}

console.log(answer)