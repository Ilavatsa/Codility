def solution(S):
    n = len(S)
    patches = 0
    i = 0
    while i < n:
        if S[i] == 'X':
            patches += 1
            i += 3
        else:
            i += 1
    return patches