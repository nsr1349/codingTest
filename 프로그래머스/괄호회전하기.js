function 괄호맞냐 (s){
  let l = []
  let 기준 = { '[' : ']', '(' : ')', '{' : '}'}
  
  for (let i = 0 ; i < s.length; i++ ){        
      l.push(s[i])
      if ( l.length > 1 && 기준[l[l.length-2]] === l[l.length-1] ){
          l.pop()
          l.pop()
      }
  }
  return l.length ? 0 : 1
}

function solution(s) {
  var answer = 0

  for (let i = 0 ; i < s.length; i++ ){        
      answer += 괄호맞냐(s)
      s = s.slice(1, s.length) + s[0]
  }
  return answer
}