const input = +require('fs').readFileSync(0, 'utf-8').toString().trim() + 1

let answer = 4, 면 = 2
for (let i = 1; i < input; i++) {
    answer = answer * 4 - ((면)*4-1)
    면 = 면*2-1
}

console.log(answer)
