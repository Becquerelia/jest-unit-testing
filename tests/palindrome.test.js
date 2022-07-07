const { palindrome } = require ("../utils/for_testing");

//! TEST FOR "probando":
test("palindrome of probando", () => {
    const result = palindrome("probando");
    expect(result).toBe("odnaborp");
});

//! TEST FOR EMPTY STRING:
test("palindrome of empty string", () => {
    const result = palindrome("");
    expect(result).toBe("");
});