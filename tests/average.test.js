const { average } = require ("../utils/for_testing");

//! TEST FOR" AVERAGE FUNCTION" USING "DESCRIBE" METHOD:

describe("average function", () => {
    test("of one value is the value itself", () => {
        expect(average([1])).toBe(1);
    })
})
