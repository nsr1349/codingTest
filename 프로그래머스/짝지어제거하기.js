function solution(s){
  let 스택 = []
  for (const a of s){
      스택.push(a)
      if (스택.length > 1 && 스택[스택.length-1] === 스택[스택.length-2]){
          스택.pop()
          스택.pop()
      }
  }
  return 스택.length ? 0 : 1
}