module.exports.fizzbuzz = function(n) {

    if(typeof n !== 'number')
        throw new Error('input raqam emas')

    if(n%15 === 0)
        return("FizzBuzz")

    if(n%5 === 0)
        return("Buzz")

    if(n%3 ===0) 
        return("Fizz")

     return n        
    };