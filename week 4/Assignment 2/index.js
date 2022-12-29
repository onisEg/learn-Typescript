// Write Function Code Here
function showTypes(arg1, arg2, arg3) {
    console.log(arg1 || "Nothing", arg2 || "Nothing", arg3 || "Nothing");
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes("String")); // String - Nothing - Nothing
console.log(showTypes("String", 100)); // String - 100 - Nothing
console.log(showTypes("String", 100, true)); // String - 100 - true
