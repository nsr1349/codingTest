function solution(order) {
  let 성공 = 0;
  const 메인컨 = [null], 보조컨 = [null]
  for (let i = order.length; i > 0; i--) 메인컨.push(i)

  for (const 타겟 of order){
      while (메인컨[메인컨.length - 1] !== 타겟  && 보조컨[보조컨.length - 1] !== 타겟){
          if (메인컨[메인컨.length - 1] === null) return 성공
          보조컨.push(메인컨.pop()) 
      }
      메인컨[메인컨.length - 1] === 타겟 ? 메인컨.pop() : 보조컨.pop()
      성공 ++ 
  }
  return 성공
}