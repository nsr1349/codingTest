function solution(want, number, discount) {
  var answer = 0, 원본 = {}, 살총개수 = 0
  for (let i = 0 ; i < number.length; i++ ) 원본[want[i]] = number[i], 살총개수 += number[i];
  
  for (let i = 0 ; i < discount.length-살총개수+1; i++ ){
      answer += 되나( JSON.parse(JSON.stringify(원본)) , discount.slice(i,i+살총개수))
  }
  return answer;
  
  function 되나 (카피, 검사할리스트){
      for (const 제품 of 검사할리스트) {
          if (!카피[제품] ) return 0
          카피[제품] --
      }
      return 1
  }
}