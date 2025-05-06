function solution(str) {
    const answer = new Set()
    const seen = new Set(str[0])

    for (let i = 1; i < str.length; i++) {
        const target = str[i]
        if (answer.has(target)) continue

        if (seen.has(target)) {
            if (target !== str[i - 1]) answer.add(target)
        } else {
            seen.add(target)
        }
    }

    return [...answer].sort().join('') || 'N'
}