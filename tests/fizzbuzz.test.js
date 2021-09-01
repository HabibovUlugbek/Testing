const fizzBuzz = require("../fizzbuzz")

describe("fizzbuzz", () => {
    it("if input type not a number" , () => {
        expect( () => {fizzBuzz.fizzbuzz("hello")}).toThrow()
        expect( () => {fizzBuzz.fizzbuzz(null)}).toThrow()
        expect( () => {fizzBuzz.fizzbuzz("heldsado")}).toThrow()
    })

    it("if number diveded 15" , () => {
        const result = fizzBuzz.fizzbuzz(225)
        expect(result).toBe("FizzBuzz")
    })

    it("if number diveded 5" , () => {
        const result = fizzBuzz.fizzbuzz(325)
        expect(result).toBe("Buzz")
    })
    it("if number diveded 3" , () => {
        const result = fizzBuzz.fizzbuzz(12)
        expect(result).toBe("Fizz")
    })

    it("if number not diveded" , () => {
        const result = fizzBuzz.fizzbuzz(8)
        expect(result).toBe(8)
    })
})