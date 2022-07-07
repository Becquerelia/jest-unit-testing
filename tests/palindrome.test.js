const { palindrome } = require ("../utils/for_testing");

//! JEST METHODS DOCUMENTATION:
// https://jestjs.io/docs/expect

//! TEST FOR "probando":
test("palindrome of probando", () => {
    const result = palindrome("probando");
    expect(result).toBe("odnaborp"); // "ToBe" is similar to "isEqual"
});

//! TEST FOR EMPTY STRING:
test("palindrome of empty string", () => {
    const result = palindrome("");
    expect(result).toBe("");
});

//! TEST FOR UNDEFINED VALUE:
test("palindrome of undefined value", () => {
    const result = palindrome();
    expect(result).toBeUndefined();
});