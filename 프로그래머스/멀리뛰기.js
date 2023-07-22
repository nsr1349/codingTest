function solution(n) {
  if (n == 1) return 1
  let a = 1 ,b = 2, sum
  for (let i = 0; i < n - 2 ; i ++){
    sum = (a + b)%1234567
    a = b
    b = sum
  }
  return b;
}