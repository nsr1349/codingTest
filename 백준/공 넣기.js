const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");

const bucket = {}
const bucketLen = +input[0].split(' ')[0]

for (let i = 0; i <  bucketLen; i++)bucket[i + 1] = 0
console.log(bucket)
for (let i = 1; i <  input.length; i++){
    const [start , end, ball] = input[i].split(' ').map((a)=> +a)
    for (let j = start; j <  end + 1; j++) bucket[j] = ball
}

console.log(Object.values(bucket).join(' '))