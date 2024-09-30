const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
let N = +input, 소인수 = 0

const 최소인수 = (n) => {
	if(n === 1) return n;
    for(let i = 2; i <= n / 2; i++) 
        if(n % i === 0) return i
    return n
}

while (N !== 1) {
    소인수 = 최소인수(N)
    console.log(소인수)
    N /= 소인수
}