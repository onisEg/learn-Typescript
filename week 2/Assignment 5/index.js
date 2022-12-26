function isHeOld(age) {
    if (typeof age === "string") {
        return "Error";
    }
    else {
        return age > 40 ? "yes" : "no";
    }
}
// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
