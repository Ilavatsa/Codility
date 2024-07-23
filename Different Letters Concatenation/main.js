function solution(A) {
    function backtrack(index, currentString) {
        const charSet = new Set(currentString);
        if (charSet.size === currentString.length) {
            maxLength = Math.max(maxLength, currentString.length);
        } else {
            return;
        }

        for (let i = index; i < A.length; i++) {
            backtrack(i + 1, currentString + A[i]);
        }
    }

    let maxLength = 0;
    backtrack(0, "");
    return maxLength;
}

// Examples
console.log(solution(["co", "dil", "ity"]));  // Should return 5
console.log(solution(["abc", "yyy", "def", "csv"]));  // Should return 6
console.log(solution(["potato", "kayak", "banana", "racecar"]));  // Should return 0
console.log(solution(["eva", "jqw", "tyn", "jan"]));  // Should return 9
