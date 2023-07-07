function solution(s){
  var open = 0
  for (const a of s){
    open += a === '(' ? 1 : -1 
    if (open === -1) return false // ')' 가 한번이라도 '(' 수보다 많을경우 실패
  }
  return open===0 ? true : false // '(' 와 ')' 의 개수가 다르다면 실패 
}