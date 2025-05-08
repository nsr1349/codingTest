function solution(ability) {
    return ability.map((a)=> Math.max(...a)).sort((a,b)=> b-a).slice(0,3).reduce((acc,crr)=> acc + crr , 0);
}

console.log(solution([[40, 10, 10], [20, 5, 0], [30, 30, 30], [70, 0, 70], [100, 100, 100]]))