const caesarCipher = require("./caesarCipher");
describe("Caesar cipher test", () => {
    test("test for falsy value", () => {
        expect(caesarCipher(null)).toBeFalsy()
    })
    test("test for falsy value", () => {
        expect(caesarCipher(undefined)).toBeFalsy()
    })
    test("test for wrapping", () => {
        expect(caesarCipher("xyz",3)).toBe("abc")
    })
    test("test for case preservation", () => {
        expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
    })
    test("test for spaces, non-special characters", () => {
        expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!")
    })
})