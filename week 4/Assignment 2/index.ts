// Write Function Code Here

function showTypes<T1 = any, T2 = any, T3 = any>(arg1?: T1, arg2?: T2, arg3?: T3): void {
  console.log(arg1 || "Nothing", arg2 || "Nothing", arg3 || "Nothing");
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true