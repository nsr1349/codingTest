// 소수
const [a , b]  = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map(a=>+a)
let arr = []

const isPrime = (n) => {
	if(n === 1) return false;
    for(let i = 2; i <= n / 2; i++) 
        if(n % i === 0) return 0
    return 1
}

for (let i = a; i < b + 1; i++)
    if (isPrime(i)) arr.push(i)

console.log(arr.length === 0 ? -1 : `${arr.reduce((acc, crr)=> acc + crr , 0)}
${arr[0]}`)
