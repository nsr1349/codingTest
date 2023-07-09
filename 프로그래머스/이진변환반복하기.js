function solution(문자) {
  let answer = [0,0]
  while (문자 !== '1'){
      const 영제거후길이 = 문자.replaceAll('0','').length 
      answer[0] += 1
      answer[1] += 문자.length - 영제거후길이
      문자 = 영제거후길이.toString(2) // 이진변환
  }
  return answer
}