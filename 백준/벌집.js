var input = +require('fs').readFileSync(0, 'utf-8').toString().trim(), n = 1, i = 1

while (n < input){
    n += i * 6
    i ++
}

console.log(i)