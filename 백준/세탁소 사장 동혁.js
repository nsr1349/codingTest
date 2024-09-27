const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map(a=> +a)
input.shift()

const coins = [25, 10, 5, 1]

for (const a of input){
    let price = a , arr = []
    for(const coin of coins){
        arr.push(Math.floor(price/coin))
        price = price % coin
    }
    console.log(arr.join(' '))
}