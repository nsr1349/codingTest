// 삼각형과 세 변
const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n")
const isSame = (a,b)=> a === b ? 1 : 0 ,
    arr = ['Scalene' , 'Isosceles' , null , 'Equilateral']
input.pop()

input.forEach(a=> {
    const [x,y,z] = a.split(' ').map(a=> +a).sort((a,b)=> a-b)
    console.log(x + y <= z ? 'Invalid' : 
                            arr[isSame(x,y) + isSame(x,z) + isSame(z,y)])
})