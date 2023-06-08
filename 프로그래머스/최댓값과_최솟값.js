function solution(s) {
  let list = s.split(' ').map((a)=>+a) // 숫자를 배열로 쪼개고
  return Math.min(...list) + ' ' + Math.max(...list) // math 얍
}
// 테스트 케이스
console.log(solution("1 2 3 4",	"1 4"))
console.log(solution("-1 -2 -3 -4",	"-4 -1"))
console.log(solution("-1 -1",	"-1 -1"))