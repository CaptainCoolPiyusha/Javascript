let score = "33"
console.log(typeof score)
console.log(typeof(score))
let valueNumber = Number(score)
console.log(typeof valueNumber)
console.log(valueNumber); 

score = "33abc"
valueNumber = Number(score)
console.log(valueNumber)

score = null
valueNumber = Number(score)
console.log(valueNumber)

score = undefined
valueNumber = Number(score)
console.log(valueNumber)

let isLoggedIn = ""
let booleanIsloggedIn = Boolean(isLoggedIn)
console.log("Boolean value is "+booleanIsloggedIn);

// 1 => true; 0 => false
// "" => false; "Piyusha" => true 

let someNumber = 22
let stringNumber = String(someNumber)
console.log(typeof(stringNumber));



