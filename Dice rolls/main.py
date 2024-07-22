def solution(A, F, M):
    total_sum = sum(A)
    target_sum = M * (len(A) + F)
    if target_sum < total_sum or (target_sum - total_sum) % F != 0:
        return [0]
    remaining_sum = (target_sum - total_sum) // F
    if remaining_sum < 1 or remaining_sum > 6:
        return [0]
    return [remaining_sum] * F