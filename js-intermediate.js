// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const getFib = (num) => {
  if (num===1) {
    return [0, 1]
  } else {
    let fib = getFib(num - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
  }
}
console.log(getFib(10))

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]
const oddChecker = (odd) => {
  let newArr = []
  for(let i=0; i < odd.length ;i++)
  if (typeof odd[i] === "number" && odd[i] %2 !== 0) {
    newArr.push(odd[i])
  }
  return newArr
}
console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["a", "t", "l", "e", "d"]
// Expected output: ["d", "e", "l", "t", "a"]
const reverse = (arr) => {
  return arr.reverse()
}
console.log(reverse(originalArray1))
console.log(reverse(originalArray2))

// 5. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })

let numArray1 = [3, 4, 5]
let numArray2 = [23, -9, 0]
let numArray3 = [4.5, -4.5, 12]
const multTwo = (arr) => {
  return arr.map(arr => arr *2)
}
console.log(multTwo(numArray1))
console.log(multTwo(numArray2))
console.log(multTwo(numArray3))

// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

const letterCounter = (str) => {
  let arr = str.toLowerCase().split('')
  let lettercount = 0
  let letter = 'l'
  for(let i=0; i < ourString.length; i++) {
    if(arr[i].includes(letter))
    lettercount += 1
  } return lettercount
}
console.log(letterCounter(ourString))


// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "llamas"
// Expected output: “am”

const letterRet = (str) => {
    if(str.length %2 == 0) {
      return str.slice(str.length/2 -1, str.length/2 +1);
  } else if (str.length %2 !== 0) {
    return str.charAt(str.length/2)
  }
}
console.log(letterRet(middleLetters1))
console.log(letterRet(middleLetters2))



// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere{
  constructor(radius){
    this.radius = radius
  }
  get area(){
    return this.calcArea()
  }
calcArea(){
  return 4*Math.PI*Math.pow(this.radius, 2)
  }
}
let test1 = new Sphere(1)
let test2 = new Sphere(2)
let test3 = new Sphere(3)
console.log(test1.area)
console.log(test2.area)
console.log(test3.area)



// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}
  let { doors , transmission } = myCar.specs
  console.log(doors, transmission)
  
// 10. Stretch: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]
// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
// var numbersToAdd3 = []
// // Expected output: []

// const accumulate = () => {
//   return
// }