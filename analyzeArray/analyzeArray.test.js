const analyzeArray = require("./analyzeArray")
describe("analyze array test", () => {
    test("test for falsy values", () => {
        expect(analyzeArray(null)).toBeFalsy();
    })
    test("test for falsy values", () => {
        expect(analyzeArray(undefined)).toBeFalsy()
    })
    test("test for [1, 2, 3, 4]", () => {
        expect(analyzeArray([1, 2, 3, 4])).toStrictEqual({
            average: 2.5,
            max: 4,
            min: 1,
            length: 4
        })
    })
    test("test for [1, 8, 3, 4, 2, 6]", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
            average: 4,
            max: 8,
            min: 1,
            length: 6
        })
    })
})