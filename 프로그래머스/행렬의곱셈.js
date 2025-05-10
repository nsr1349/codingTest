function solution(arr1, arr2) {
    let answer = [], temp = []
    for (const A of arr1){
        temp = []
        for (let j = 0; j < arr2[0].length; j ++){
            temp.push(arr2.map((a, k)=> a[j] * A[k]).reduce((acc, crr)=> acc + crr, 0))
        }
        answer.push(temp)
    }
    return answer;
}


console.log(solution([
    [1, 4], 
    [3, 2], 
    [4, 1]],	
    
    [[3, 4], 
    [5, 6]]))