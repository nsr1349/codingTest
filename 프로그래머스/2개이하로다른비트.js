function solution(numbers) {
    return numbers.map((num)=>{
        const bin = num.toString(2).split('')
        const lastZeroIdx = bin.lastIndexOf('0')

        if (lastZeroIdx === -1){
            bin.splice( 1, 0 ,'0')
        } else {
            bin[lastZeroIdx] = '1'
            if (bin.length - 1 !== lastZeroIdx) 
                bin[lastZeroIdx + 1] = '0'
        }

        return parseInt(bin.join(''),2)
    })
}

console.log(solution([2,7]))