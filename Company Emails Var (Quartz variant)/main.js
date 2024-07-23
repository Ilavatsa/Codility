function solution(S, C) {
    function generateEmail(firstName, middleName, lastName, company) {
        const firstInitial = firstName[0].toLowerCase();
        const middleInitial = middleName ? middleName[0].toLowerCase() : '';
        let cleanLastName = lastName.replace(/-/g, '').toLowerCase();
        cleanLastName = cleanLastName.substring(0, 8);
        return `${firstInitial}${middleInitial}${cleanLastName}@${company.toLowerCase()}.com`;
    }

    const names = S.split(", ");
    const company = C.toLowerCase();
    const emailDict = {};
    const result = [];

    names.forEach(name => {
        const parts = name.split(' ');
        let firstName, middleName, lastName;

        if (parts.length === 2) {
            [firstName, lastName] = parts;
            middleName = "";
        } else if (parts.length === 3) {
            [firstName, middleName, lastName] = parts;
        }

        let email = generateEmail(firstName, middleName, lastName, company);

        if (email in emailDict) {
            emailDict[email] += 1;
            const baseEmail = email.split('@')[0];
            email = `${baseEmail}${emailDict[email]}@${company}.com`;
        } else {
            emailDict[email] = 1;
        }

        result.push(`${name} <${email}>`);
    });

    return result.join(', ');
}

// Example usage:
const S = "John Doe, Peter Parker, Mary Jane Watson-Parker, James Doe, John Elvis Doe, Jane Doe, Penny Parker";
const C = "Example";
console.log(solution(S, C));
