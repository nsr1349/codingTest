function solution(land) {
  for (let i = 1 ; i < land.length; i++){
      const 현재땅 = land[i-1], 밟을땅 = land[i]
      밟을땅[0] += Math.max(현재땅[1],현재땅[2],현재땅[3]) 
      밟을땅[1] += Math.max(현재땅[0],현재땅[2],현재땅[3]) 
      밟을땅[2] += Math.max(현재땅[0],현재땅[1],현재땅[3]) 
      밟을땅[3] += Math.max(현재땅[0],현재땅[1],현재땅[2]) 
  }
  return Math.max(...land[land.length-1])
}
// 이렇게 하면 각 밟을 땅이 점점 올라가면서 마지막 땅에 땅별 최선의 수가 나옴