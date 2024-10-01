// 삼각형 외우기
const [a,b,c] = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map(a=> +a)

console.log(a+ b+ c !== 180 ? 'Error' : 
            a === 60 && b === 60 ? 'Equilateral' : 
            a === b || b === c || c === a ? 'Isosceles' : 'Scalene')