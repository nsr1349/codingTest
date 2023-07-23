function solution(topping) {
  let answer = 0 ,
      형 = {}, 형종류개수 = 0, 
      동생 = {}, 동생종류개수 = 0

  for (const a of topping) 형[a] ? 형[a]++ : (형[a] = 1, 형종류개수 ++ )

  for (const a of topping){
      형[a] -- 
      if (형[a] === 0 ) 형종류개수 -- 
      if (!동생[a]){ 동생[a] = 1 ; 동생종류개수 ++ }
      if (형종류개수 === 동생종류개수) answer ++
  }
  return answer
} // 잘푼듯