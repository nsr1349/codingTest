function solution(n) {
  let F = Array(n+1)
  F[0] = 0
  F[1] = 1
  for (let i = 2; i < n+1; i++) F[i] = (F[i-2] + F[i-1])%1234567

  return F[n]
}