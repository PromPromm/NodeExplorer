const mathLib = require("../src/mathlib")

test("add 10 and 20", () => {
    expect(mathLib.add(10, 20)).toBe(30)
})

test("add 1.20 and 20", () => {
    expect(mathLib.add(1.20, 20)).toBe(21.20)
})

test("sub 30 from 20", () => {
    expect(mathLib.sub(30, 20)).toBe(10)
})

test("mul 10 and 2", () => {
    expect(mathLib.mul(10, 2)).toBe(20)
})

test("div 100 by 20", () => {
    expect(mathLib.div(100, 20)).toBe(5)
})

test("pow of 2 to 2", () => {
    expect(mathLib.pow(2, 2)).toBe(4)
})

test("mean of [1, 3, 2, 1, 3]", () => {
    expect(mathLib.mean([1, 3, 2, 1, 3])).toBe(2)
})
