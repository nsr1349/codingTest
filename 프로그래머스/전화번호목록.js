// 문자열 정렬한다면, 접두어가 있으면 붙어있긴 할테니까 풀릴 것 같다는 생각이였음
function solution(pb) {
  pb.sort()
  for (let i = 0 ; i < pb.length-1; i++){
      if (pb[i] === pb[i+1].slice(0,pb[i].length)) return false
  }
  return true
}