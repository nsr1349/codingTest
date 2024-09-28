const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
input.pop()
input.map(a=> {
    const [ A, B ]=  a.split(' ').map(a=> +a)
    console.log(A % B === 0 ? 'multiple' : B % A === 0 ? 'factor' : 'neither' )
})
