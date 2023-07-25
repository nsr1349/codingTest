function solution(n, t, m, p) {
  let 답 = '',
      전체문장 = '',
      전체문장길이 = t*m,
      i = 0,
      턴 = p-1
  
  while (전체문장.length < 전체문장길이){
      전체문장 += i.toString(n)
      i++
  }
  
  for (let i = 0; i < 전체문장길이; i += m) 답 += 전체문장[ 턴 + i ]
  
  return 답.toUpperCase()
}