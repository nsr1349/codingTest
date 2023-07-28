function solution(storey) {
  let answer = 0, l = storey.toString().split('').map(a => +a ).reverse()
  l.push(0)
  
  for (let i = 0 ; i < l.length-1; i++){
      const p = l[i] === 5 ? 1 : 0
      l[i+p] < 5 ? answer += l[i] : (answer += (10 - l[i]) , l[i+1] ++) 
  }
  answer += l[l.length-1]

  return answer
}

// 난해해보일 수 있기에 미래의 나를 위해 설명함.
// 현재 검사할 숫자가 5인 경우는 특수한 경우임. 이 다음 숫자가 5 이하인지에 따라서 숫자를 올리는 게 최선인지 내리는게 최선인지가 달라짐. p 는 현재 숫자 가지고 조건을 돌릴지, 다음 숫자 가지고 조건을 돌릴지 정하는 숫자임.