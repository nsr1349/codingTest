const [[_, M], arr] = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n").map(a=> a.split(' ').map(a=> +a))

function 솔루션(list, choiceNum) {
    const result = []

    function 구하기(items, index) {
        if (items.length === choiceNum) {
            const sum = items.reduce((a,c)=> a+c,0)
            return sum <= M && result.push(sum)
        }
        for (let i = index; i < list.length; i++) 
            구하기([...items, list[i]], i + 1)
    }
    구하기([], 0)
    return result.sort((a,b)=> b-a)[0]
}

console.log(솔루션(arr,3))