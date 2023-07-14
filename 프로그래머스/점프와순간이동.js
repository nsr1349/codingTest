function solution(n){
  let cost = 0
  while (n !== 0 ){
      n%2 === 0 ? 
          n /= 2 : 
          ( n-- , cost ++ )
  }
  return cost
}