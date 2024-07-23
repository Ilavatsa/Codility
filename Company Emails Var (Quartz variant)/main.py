def solution(S, C):
    import re

    # Helper function to generate email base from name parts
    def generate_email_base(first_name, middle_name, last_name):
        first_initial = first_name[0].lower()
        middle_initial = middle_name[0].lower() if middle_name else ''
        last_name = re.sub(r'-', '', last_name).lower()[:8]
        return first_initial + middle_initial + last_name

    names = S.split(", ")
    company = C.lower()
    email_count = {}
    result = []

    for name in names:
        parts = name.split()
        if len(parts) == 2:
            first_name, last_name = parts
            middle_name = ""
        else:
            first_name, middle_name, last_name = parts

        email_base = generate_email_base(first_name, middle_name, last_name)
        email = f"{email_base}@{company}.com"
        
        # Ensure email uniqueness
        if email in email_count:
            email_count[email] += 1
            unique_email = f"{email_base}{email_count[email]}@{company}.com"
        else:
            email_count[email] = 1
            unique_email = email

        result.append(f"{name} <{unique_email}>")

    return ", ".join(result)

# Example usage:
S = "John Doe, Peter Parker, Mary Jane Watson-Parker, James Doe, John Elvis Doe, Jane Doe, Penny Parker"
C = "Example"
print(solution(S, C))
