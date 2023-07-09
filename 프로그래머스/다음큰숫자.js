function 일의개수 (n){ return n.toString(2).replaceAll('0','').length }

function solution(n) {
    let 답 = n+1
    let 목표개수 = 일의개수(n)
    while(true){
        if (일의개수(답) === 목표개수) return 답
        답++
    }
}
