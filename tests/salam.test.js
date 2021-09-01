const salam = require("../salam")

describe("salam - " , () => {
    it("should return hi + name" , () => {
       const result =  salam.salom("Ulug`bek")
      // expect(result).toContain("Ulug`bek")
      expect(result).toMatch(/Ulug`bek/)

    })
})