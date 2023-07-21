function solution(arr) {
    var answer = arr[0];
    for (let i = 1 ; i < arr.length; i++){
        answer = 최소공배수(answer, arr[i])
    }
    return answer

    function 최소공배수 ( a, b ){
        for (let i = Math.max(a,b) ; i < (a*b) + 1 ; i ++){   
            if ( i % a === 0 && i % b === 0 ) return i
        }
    }
}