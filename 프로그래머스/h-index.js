function solution(c) {
  c = c.sort((a,b)=> b-a);
  let i = 0;
  while(i + 1 <= c[i]) i++;
  return i;
}