function solution(n) {
  var answer = 0;
  let i = 1
  while (n > 0){
    if (n % i === 0) answer += 1
    n -= i
    i++
  }
  return answer;
}