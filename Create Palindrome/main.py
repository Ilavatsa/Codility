def solution(S):
    N = len(S)
    left = 0
    right = N - 1
    while left < right:
        if S[left] == '?' and S[right] == '?':
            S = S[:left] + 'a' + S[left+1:right] + 'a' + S[right+1:]
        elif S[left] == '?':
            S = S[:left] + S[right] + S[left+1:]
        elif S[right] == '?':
            S = S[:right] + S[left] + S[right+1:]
        else:
            if S[left] != S[right]:
                return "NO"
        left += 1
        right -= 1
    return S