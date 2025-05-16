const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");

input.slice(1)
    .map((a)=> a.split(' ').map(a=> +a))
    .sort(([ax,ay],[bx,by])=> ay === by ? ax - bx : ay - by )
    .forEach((a)=> console.log(a.join(' ')))



