// 문제: "배열에서 중복되지 않는 숫자 찾기"
// 설명:
// 정수로 이루어진 배열 nums가 주어집니다. 배열 안에서 중복되지 않는 숫자를 찾아서 반환하는 함수를 작성하세요. 중복되지 않는 숫자가 여러 개인 경우, 가장 먼저 나타나는 숫자를 반환하세요.

// 입력:

// 정수 배열 nums가 주어집니다. (1 ≤ nums.length ≤ 1000)
// 출력:

// 중복되지 않는 숫자를 반환합니다.
// 예시:

// javascript
// 코드 복사
// 입력:
// nums = [2, 1, 1, 3, 2, 4, 5, 5, 4]

// 출력:
// 3

function findUnique(nums) {
    const obj = {}
    for (const a of nums) obj[a] = obj[a] ? obj[a] + 1 : 1
    for (const a of Object.entries(obj)) if (a[1] === 1) return + a[0]
    return
}

// 예시 실행
console.log(findUnique([2, 1, 1, 3, 2, 4, 5, 5, 4])); // 3


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////


// 문제: "문자열에서 반복되지 않는 첫 번째 문자 찾기"
// 설명:
// 주어진 문자열 s에서 처음으로 반복되지 않는 문자를 찾아서 반환하는 함수를 작성하세요. 반복되지 않는 문자가 없는 경우에는 빈 문자열을 반환합니다.

// 입력:

// 문자열 s (1 ≤ s.length ≤ 10000)
// 출력:

// 반복되지 않는 첫 번째 문자를 반환합니다. 반복되지 않는 문자가 없으면 빈 문자열을 반환합니다.
// 예시:

// javascript
// 코드 복사
// 입력:
// s = "leetcode"

// 출력:
// "l"

function firstUniqueChar(s) {
    // 여기에 코드를 작성하세요.
}

// 예시 실행
console.log(firstUniqueChar("leetcode")); // "l"






