function solution(clothes) {  
  let d = {}
  for (const a of clothes) d[a[1]] ?  d[a[1]] += 1 : d[a[1]] = 2
  return Object.values(d).reduce((acc,b)=> acc * b , 1) - 1
}
