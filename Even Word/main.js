function solution(S) {
    let count = {};
    for (let char of S) {
        count[char] = (count[char] || 0) + 1;
    }
    return Object.values(count).reduce((a, b) => a + (b % 2), 0);
}