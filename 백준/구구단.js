const i = parseInt(require('fs').readFileSync(0, 'utf-8').toString().trim())

for(let j = 1; j < 10; j ++){
    console.log(`${i} * ${j} = ${i * j}`)
}
