function solution(s) {
  let l = JSON.parse(s.replaceAll('{', '[').replaceAll('}', ']')).sort((a,b)=> a.length - b.length), 
      answer = []
  for (const a of l){
      for (const b of a){
          if (answer.indexOf(b) === -1 ) {
              answer.push(b)
              break
          } 
      }
  }
  return answer
}