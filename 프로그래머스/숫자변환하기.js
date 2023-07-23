function solution(x, y, n) {
  let memo = []
  memo[x] = 1
  while (x !== y){
      if (memo[x]){
          memo[x+n] = memo[x+n] ? Math.min(memo[x] + 1, memo[x+n]) : memo[x] + 1
          memo[x*2] = memo[x*2] ? Math.min(memo[x] + 1, memo[x*2]) : memo[x] + 1
          memo[x*3] = memo[x*3] ? Math.min(memo[x] + 1, memo[x*3]) : memo[x] + 1
      }
      x++
  }
  return memo[x] ? memo[x] - 1 : -1
}