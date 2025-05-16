const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");

[...new Set(input.slice(1))].sort((a,b)=> a.length === b.length ? a.localeCompare(b) : a.length - b.length ).map(a=> console.log(a))



