const user = require("../src/user")

test("User object is returned properly", () => {
    const userObj = user.getUserDetails()
    expect(userObj.firstName).toBe("John")
    expect(userObj.lastName).toBe("Doe")
    expect(userObj).toHaveProperty("age")
    expect(userObj.age).toBe(18)
    expect(userObj.height).toBeLessThan(150)
})
