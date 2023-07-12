function solution(n, words) {
  const 부른거 = [words[0]]
  for (let i = 1; i < words.length; i++){
      const word = words[i] 
      if (부른거.indexOf(word) === -1 && word[0] === words[i-1][words[i-1].length-1]){ // 탈락조건 
        부른거.push(word)
      }
      else { return [i%n+1, Math.floor(i/n)+1] }
  }
  return [0,0] // 탈락자 없음
}