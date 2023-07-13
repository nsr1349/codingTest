function solution(n,a,b){
  let answer = 1
  while (b-a === 1){ // 만나지 않았다면
      answer++  // 과정 + 1
      a = Math.floor(a/2) // 다음라운드 진출
      b = Math.floor(b/2)
  }
  return answer
}
