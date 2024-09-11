const i = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map((a)=> parseInt(a))

if (i[0] > 0){
    if (i[1] > 0) return console.log(1)
    console.log(4)
} else {
    if (i[1] > 0) return console.log(2)
    console.log(3)
}