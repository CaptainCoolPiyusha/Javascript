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

//++++++++++++++++++++++++++  OPERATIONS  ++++++++++++++++++++++++++

console.log("2 raised to 3 is " + 2**3);
//else other arithmetic operations are same

let str1 = "Piyusha"
let str2 = "Patil"
let str3 = str1 +" "+ str2

console.log("String concatination is " + str3)
console.log(1+"2");
console.log("1"+2);
console.log("1"+2+2);
console.log(1+2+"2"); 
//Not good approach to write things like this, Use parathesis instead while dealing with such operations
console.log(+true);
console.log(-true);
//+ and - are unary operators

console.log(+"");


