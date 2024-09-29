const [_ , c] = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
let answer = 0

const isPrime = (n) => {
	if(n === 1) return false;
    for(let i = 2; i <= n / 2; i++) 
        if(n % i === 0) return 0
    return 1
}

for (const a of c.split(' '))
    answer += isPrime(+a)

console.log(answer)

