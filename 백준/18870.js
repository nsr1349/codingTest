const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
const nums = input[1].split(' ').map(Number);
const sorted = [...new Set(nums)].sort((a, b) => a - b);

const map = new Map();
sorted.forEach((val, idx) => {
  map.set(val, idx);
});

console.log(nums.map(a => map.get(a)).join(' '));