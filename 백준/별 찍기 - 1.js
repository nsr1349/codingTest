const input = + require('fs').readFileSync(0, 'utf-8').toString().trim();

for (let i = 1; i < input + 1; i++){
    console.log('*'.repeat(i))
}