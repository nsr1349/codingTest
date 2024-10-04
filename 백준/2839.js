// 설탕 배달 
let n = +require('fs').readFileSync(0, 'utf-8').toString().trim(),
    three = 0

while (n % 5 !==0 && n > 0){
    three++
    n -= 3
}

console.log(n >= 0 ? three + n/5 : -1)
