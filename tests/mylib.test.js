const mylib = require('../mylib')
const  currency = require('../currensy')
const db = require("../db")


describe('absolute', () => {
    it(" - should return a positive number if input is positive ", () => {
        const result = mylib.absolute(2)
        expect(result).toBe(2)
    })

    it(" - should return a positive number if input is nonpositive ", () => {
        const result = mylib.absolute(-2)
        expect(result).toBe(2)
    })

    it(" - should return a null number if input is null ", () => {
        const result = mylib.absolute(0)
        expect(result).toBe(0)
    })
})

describe('currency ', () => {
    it("should return default currencies" ,()=> {
       const result = currency.currency()

       //o`ta umumiy
       expect(result).toBeDefined()
       expect(result).not.toBeNull()

       //o`ta aniq
       expect(result[0]).toBe("UZS")

       //tog`ri uslub 
       expect(result).toContain("UZS")

       expect(result).toEqual(expect.arrayContaining(["UZS", "MYR"]))
    })
})

describe("getProduct" , () => {
    it("should return th product the given id ", () =>{
        const result = mylib.product(3)
        expect(result).toEqual({id:3 , title: "banana" , price:2})
        expect(result).toMatchObject({id:3 , price:2})
        expect(result).toHaveProperty("price" , 2)
    })
})

describe("registerUser", () => {
    it("should retrunr if username false",() =>{
        //null NaN undefined false 0 ""
        const falsyItems = [null, NaN, undefined ,false ,0 ,""]
        falsyItems.forEach(fi => {
            expect(() => {
                mylib.registerUser(fi).toThrow();
            })
        })
        
    })

    it("should return if object valid username is passed", ()=> {
        const user = mylib.registerUser('admin')

        expect(user).toMatchObject({userName :"admin"})
        expect(user.id).toBeGreaterThan(0)
    })
})

describe("apply discount " , () => {
    it("should apply 10% discount if customer price greater thna 100" , () => {
        db.getCustomer = function (customerId) {
            console.log("Mock qildik")
            return {id: customerId , points:110}
        }

        const order = { customerId:7, price:100, totalPrice:100}

        mylib.applydiscount(order)
        expect(order.totalPrice).toBe(90)
    })

    it("should apply not 10% discount if customer price lesses than 100" , () => {
        db.getCustomer = function (customerId) {
            console.log("Mock qildik")
            return {id: customerId , points:10}
        }

        const order = { customerId:7, price:100, totalPrice:100}

        mylib.applydiscount(order)
        expect(order.totalPrice).toBe(100)
    })
})
