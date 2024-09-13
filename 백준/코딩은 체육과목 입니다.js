const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

console.log('long '.repeat( Math.ceil(+input / 4)) + 'int')