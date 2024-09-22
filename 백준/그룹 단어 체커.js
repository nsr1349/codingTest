const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
input.shift()
let answer = 0

const 그룹단어인가 = (word)=> {
    let 전단어 = '',  나왔던단어들 = []
    for (const 힌글자 of word){
        if (전단어 !== 힌글자){
            if (나왔던단어들.includes(힌글자)) return 0
            나왔던단어들.push(힌글자)
        }
        전단어 = 힌글자
    }
    return 1
}

for (const a of input) answer += 그룹단어인가(a)

console.log(answer)