function solution(arrA, arrB) {
    const gcdA = getGCDFromArray(arrA);
    const gcdB = getGCDFromArray(arrB);

    return isValid(gcdA, arrB) || isValid(gcdB, arrA) ? Math.max(gcdA, gcdB) : 0
}

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function getGCDFromArray(arr) {
    return arr.reduce((acc, cur) => gcd(acc, cur));
}

function isValid(divisor, arr) {
    return !arr.some((num) => num % divisor === 0)
}

console.log(solution([10, 20],	[5, 17]))