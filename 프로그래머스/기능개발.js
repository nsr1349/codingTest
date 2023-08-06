function solution(p, speeds) {
  let answer = [],
      len = p.length, 
      진척도 = 0
  
  while (진척도 < len){
      if (p[진척도] >= 100){
          let cnt = 0
          while (p[진척도] >= 100){
              cnt ++
              진척도 ++ 
          }
          answer.push(cnt)
      }
      for (let i = 0; i < len; i++) p[i] = p[i] + speeds[i]
  }
  
  return answer
}
