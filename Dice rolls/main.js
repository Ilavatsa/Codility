function solution(A, F, M) {
    let totalSum = A.reduce((a, b) => a + b, 0);
    let targetSum = M * (A.length + F);
    if (targetSum < totalSum || (targetSum - totalSum) % F !== 0) {
        return [0];
    }
    let remainingSum = Math.floor((targetSum - totalSum) / F);
    if (remainingSum < 1 || remainingSum > 6) {
        return [0];
    }
    return Array(F).fill(remainingSum);
}