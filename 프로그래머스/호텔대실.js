function solution(book_time) {
  const 예약시간표 = []
  for (let i = 0 ; i < book_time.length; i++){
      const t = book_time[i]
      t[0] = t[0].slice(0,2)*60 + (+t[0].slice(3,5))
      t[1] = t[1].slice(0,2)*60 + (+t[1].slice(3,5)) + 10
  }
  book_time.sort((a,b)=>a[0] - b[0])
  for (const t of book_time){
      const 객실인덱스 = 기존객실인덱스찾기(t)
      객실인덱스 === null ? 
          예약시간표.push(t[1]) : 
          예약시간표[객실인덱스] = t[1]
  }
  return 예약시간표.length
  
  function 기존객실인덱스찾기 (t){
      for (let i = 0 ; i < 예약시간표.length; i++){
          if (예약시간표[i] <= t[0] ) return i
      }
      return null
  }
}