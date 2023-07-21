// Write your solution in this file!
const employee = {
    name: "Henry Henricson",
    streetAddress: "801 Henris St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updEmployee = {...employee};
    updEmployee[key] = value;
    return updEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const updEmployee = {...employee};
    delete updEmployee[key];
    return updEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}