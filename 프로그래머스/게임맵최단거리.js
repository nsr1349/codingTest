function solution(maps) {
    let moves = [[0,1],[0,-1],[1,0],[-1,0]],  // 상하좌우로 움식일거 표현
        stack = [[0,0]],  // 시작 위치 들어가있음
        n = maps.length, 
        m = maps[0].length,
        temp, x, y, nx, ny
    
    while (stack.length){
        temp = stack.shift() // 상하좌우로 움직여볼 위치 꺼내봄
        x = temp[0]
        y = temp[1]
        for (const move of moves){ 
            nx = x+move[0]
            ny = y+move[1]
            if (nx >= 0 && ny >= 0 &&  nx < n && ny < m && maps[nx][ny] === 1){ // 상하좌우로 움직이는데 별 이상 없으면
                maps[nx][ny] = maps[x][y] + 1 // 그곳에 현재 위치 + 1 함. 이 숫자는 지금까지 걸어온 거리임.
                stack.push([nx,ny]) // 움직이기 성공이니까 움직여볼 위치에 이 위치도 추가
            }
        }
    }
    return maps[n-1][m-1] === 1 ? -1 : maps[n-1][m-1]
}