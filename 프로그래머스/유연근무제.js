const realTime = (time) => (Math.floor(time / 100) * 60) + time % 100

const solution = (schedules, timelogs, startday) => {
    return timelogs.filter((timelog, i)=> {
        let sTime = realTime(schedules[i]) + 10
        return timelog.every((t, d) => 
            (d + startday - 1) % 7 + 1 > 5 || sTime >= realTime(t)) 
    }).length
}


console.log(solution2([700, 800, 1100],[[710, 2359, 1050, 700, 650, 631, 659], [800, 801, 805, 800, 759, 810, 809], [1105, 1001, 1002, 600, 1059, 1001, 1100]],5))

// console.log(solution2([730, 855, 700, 720],[[710, 700, 650, 735, 700, 931, 912], [908, 901, 805, 815, 800, 831, 835], [705, 701, 702, 705, 710, 710, 711], [707, 731, 859, 913, 934, 931, 905]],1))