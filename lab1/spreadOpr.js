var array1 = ["apple", "banana", "cherry"];
var array2 = ["watermelon", "mulberry"]
var newArray = [...array1, ...array2];
let[var1,var2,...var3] = newArray
console.log(var1)
console.log(var2)
console.log(var3)