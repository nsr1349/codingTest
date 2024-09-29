const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map(a=>+a)
input.pop()

for (const a of input){
    const arr = []
    for(let i = 2 ; i < a + 1; i++)
        if (a % i === 0) arr.push(a/i)
    console.log(a === arr.reduce((acc , crr)=> acc + crr, 0) ? 
                `${a} = ${arr.reverse().join(' + ')}` : 
                `${a} is NOT perfect.`)
}