// const input = +require('fs').readFileSync(0, 'utf-8').toString().trim();
const input = 5

for (let i = 1; i < input*2 ; i++){
    let a = i > input ? input - (i - input) : i
    console.log(`${' '.repeat(input - a)}${'*'.repeat(a*2-1)}`)
}