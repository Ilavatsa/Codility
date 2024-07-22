def solution(S):
    count = {}
    for char in S:
        if char in count:
            count[char] += 1
        else:
            count[char] = 1
    return sum(val % 2 for val in count.values())