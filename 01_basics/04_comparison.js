console.log("2">1);
console.log("02">1);
//converts string to number before comparison


console.log("Comparison with null");
console.log(null > 0);  // false
console.log(null == 0);  //false
console.log(null >= 0); //true

// Comparison check >= <= etc converts null to 0 but Equality check does not so null>0 gives false value and null >= 0 is true here null = 0 

console.log("Comparison with undefined");
console.log(undefined > 0);  // false
console.log(undefined == 0);  //false
console.log(undefined >= 0); //false

//Strict null check ===
//checks for data types also
//so below gives false
console.log("Strict check");
console.log("2"===2);

console.log("Not Strict check");
console.log("2"==2); //true
