function solution(ingre) {
  var answer = 0
  let ing = ingre.join('')
  for (let i = 0 ; i < ing.length; i ++){
  if (ing.slice(i,i+4) == '1231'){
          ing = ing.slice(0,i) + ing.slice(i+4,ing.length)
          answer ++
          i -=3
      }
  }
  return answer;
}