function solution(numbers, target) {
  let answer = 0, len = numbers.length
  
  function dfs (idx , total){
      if (idx === len){
          if (total === target) answer ++
      } else {
          dfs(idx+1 , total + numbers[idx] )
          dfs(idx+1 , total - numbers[idx] )
      }
  }
  dfs(0,0)
  return answer
}