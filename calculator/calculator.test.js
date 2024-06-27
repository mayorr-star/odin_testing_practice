const calculator = require("./calculator");
test("test for string inputs", () => {
    expect(calculator.add("gstgd")).toBe("Input a number")
})
test("test for null", () => {
    expect(calculator.add(null)).toBe("Input a number")
})
test("test for undefined", () => {
    expect(calculator.add(undefined)).toBe("Input a number")
})
test("test for add", () => {
    expect(calculator.add(1,2)).toBe(3)
})
test("test for add", () => {
    expect(calculator.add(1,200)).toBe(201)
})
test("test for add", () => {
    expect(calculator.add(10000,10000)).toBe(20000)
})
test("test for subtract", () => {
    expect(calculator.subtract(1,2)).toBe(-1)
})
test("test for subtract", () => {
    expect(calculator.subtract(10,5)).toBe(5)
})
test("test for subtract", () => {
    expect(calculator.subtract(10000,10000)).toBe(0)
})
test("test for multiply", () => {
    expect(calculator.multiply(1,2)).toBe(2)
})
test("test for multiply", () => {
    expect(calculator.multiply(2,200)).toBe(400)
})
test("test for multiply", () => {
    expect(calculator.multiply(10,10)).toBe(100)
})
test("test for divide", () => {
    expect(calculator.divide(1,2)).toBe(0.5)
})
test("test for divide", () => {
    expect(calculator.divide(200,5)).toBe(40)
})
test("test for divide", () => {
    expect(calculator.divide(10000,10000)).toBe(1)
})