def solution(A):
    def is_unique(s):
        # Check if all characters in the string are unique
        return len(set(s)) == len(s)
    
    def backtrack(index, current_string):
        nonlocal max_length
        if is_unique(current_string):
            max_length = max(max_length, len(current_string))
        else:
            return
        
        for i in range(index, len(A)):
            backtrack(i + 1, current_string + A[i])

    max_length = 0
    backtrack(0, "")
    return max_length

# Examples
print(solution(["co", "dil", "ity"]))  # Should return 5
print(solution(["abc", "yyy", "def", "csv"]))  # Should return 6
print(solution(["potato", "kayak", "banana", "racecar"]))  # Should return 0
print(solution(["eva", "jqw", "tyn", "jan"]))  # Should return 9

