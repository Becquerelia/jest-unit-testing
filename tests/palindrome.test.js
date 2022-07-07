const { palindrome } = require ("../utils/for_testing");

test("palindrome test", () => {
    const result = palindrome("probando");
    expect(result).toBe("odnaborp");
})