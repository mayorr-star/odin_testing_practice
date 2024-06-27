const reverseString = require("./reverseString");
test("test for null", () => {
    expect(reverseString(null)).toBe("Only strings are accepted")
})
test("test for undefined", () => {
    expect(reverseString(undefined)).toBe("Only strings are accepted")
})
test("test for empty strings", () => {
    expect(reverseString("")).toBe("")
})
test("test for boy", () => {
    expect(reverseString("boy")).toBe("yob")
})
test("test for phone", () => {
    expect(reverseString("phone")).toBe("enohp")
})
test("test for asdfghjkl", () => {
    expect(reverseString("asdfghjkl")).toBe("lkjhgfdsa")
})
test("test for reversestring", () => {
    expect(reverseString("reversestring")).toBe("gnirtsesrever")
})
test("test for testing", () => {
    expect(reverseString("testing")).toBe("gnitset")
})
test("test for spray", () => {
    expect(reverseString("spray")).toBe("yarps")
})
test("test for numbers", () => {
    expect(reverseString(123)).toBe("Only strings are accepted")
})