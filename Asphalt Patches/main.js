function solution(S) {
    let patches = 0;
    let xCount = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'X') {
            xCount++;
            if (xCount === 1) {
                patches++;
            }
        } else {
            xCount = 0;
        }
    }
    return patches;
}