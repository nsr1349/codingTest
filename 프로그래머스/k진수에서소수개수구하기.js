function solution(n, k) {
  function 소수냐 (num){
      if (num < 2) return false
      for(let i=2; i*i<=num; i++) if(num % i == 0) return false;
      return true;
  }
  var answer = 0;
  n.toString(k).split('0').forEach( a => {
    if (소수냐(+a)) answer++
  })
  return answer
}