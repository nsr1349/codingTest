const input = +require('fs').readFileSync(0, 'utf-8').toString().trim();

let upIdx = 1,
    downIdx = 0,
    maxNum = 2,
    num = [1,1]

for (let i = 1; i < input ; i++){
    num[upIdx] ++ 
    num[downIdx] --
    if (num[upIdx] === maxNum){
        num[downIdx] ++
        upIdx = upIdx ? 0 : 1
        downIdx = downIdx ? 0 : 1
        maxNum ++
    }
}
console.log(num.join('/'))