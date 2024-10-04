// 수학은 비대면강의입니다
const [a,b,c,d,e,f] = require('fs').readFileSync(0, 'utf-8').toString().trim().split(" ").map(a=> +a)

console.log(`${(e*c-b*f)/(e*a-b*d)} ${(c*d-a*f)/(b*d-a*e)}`)