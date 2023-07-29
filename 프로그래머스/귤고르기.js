function solution(k, tangerine) {
  let answer = 0, list = []
  for (const a of tangerine) list[a] = list[a] ? list[a] + 1 : 1
  list.sort((a,b)=>b-a)
  for (const a of list){
      k -= a
      answer ++
      if (k < 1) return answer
  }
}