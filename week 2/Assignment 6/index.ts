
let post:readonly [number, string, boolean];


post = [100, 200, "Title"]; // Error
post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good

post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here
let [id,title,state]=[100,"title",true]
// Do Not Edit Here
console.log(100); // 100
console.log(title); // "Title"
console.log(state); // true