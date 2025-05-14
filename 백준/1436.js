let input = require('fs').readFileSync(0, 'utf-8').toString().trim();
let 초기값 = 665

while (true) {
    초기값++
    if ((초기값).toString().indexOf('666') !== -1){
        input -= 1
        if (input === 0) break
    }
}

console.log(초기값)
