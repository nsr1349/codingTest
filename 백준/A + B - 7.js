const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");

for (let i = 1 ; i < input.length; i++){
    console.log(`Case #${i}: ${input[i].split(' ').reduce((acc ,crr)=> + acc + +crr , 0)}`)
}

