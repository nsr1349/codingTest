const i = require('fs').readFileSync("/dev/stdin").toString().trim();

console.log(i > 89 ? 'A' : 
            i > 79 ? 'B' : 
            i > 69 ? 'C' : 
            i > 59 ? 'D' : 
                    'F')