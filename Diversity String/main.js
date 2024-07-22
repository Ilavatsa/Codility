function solution(N) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let count = Math.floor(N / 26);
    let remaining = N % 26;
    let result = Array(26).fill('').map((_, i) => letters[i].repeat(count)).join('');
    for (let i = 0; i < remaining; i++) {
        result += letters[i];
    }
    return result;
}