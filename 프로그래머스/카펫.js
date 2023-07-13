function solution(brown, yellow) {
  const a = (brown-4)/2
  for (let i = 1  ; i < a ; i++){
      if (yellow/i + i === a ) return [yellow/i + 2 , i + 2]
  }
}