function solution(S) {
    let left = 0;
    let right = S.length - 1;
    let result = S.split('');
    while (left < right) {
        if (result[left] === '?' && result[right] === '?') {
            result[left] = 'a';
            result[right] = 'a';
        } else if (result[left] === '?') {
            result[left] = result[right];
        } else if (result[right] === '?') {
            result[right] = result[left];
        } else {
            if (result[left] !== result[right]) {
                return "NO";
            }
        }
        left += 1;
        right -= 1;
    }
    return result.join('');
}
