const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");

input.slice(1)
    .map((a)=> {
        const [age, name] = a.split(' ')
        return [+age, name]})
    .sort((a,b)=> a[0] === b[0] ? a[1] > b[1] : a[0] - b[0] )
    .map(a=> console.log(a.join(' ')))