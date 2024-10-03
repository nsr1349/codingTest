// 분해합
const N = +require('fs').readFileSync(0, 'utf-8').toString().trim();

for (let i = 1; i < N; i++)
    if (i + ('' + i).split('').map(a=>+a).reduce((a,c)=> a+c,0) === N) 
        return console.log(i)

console.log(0)

