def solution(N):
    letters = 'abcdefghijklmnopqrstuvwxyz'
    count = N // 26
    remaining = N % 26
    result = ''
    for i in range(26):
        result += letters[i] * count
    for i in range(remaining):
        result += letters[i]
    return result