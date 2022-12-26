var post;
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good
// post.push("Elzero"); // Error => Cant Add
// Create Destructuring Here
var _a = [100, "title", true], id = _a[0], title = _a[1], state = _a[2];
// Do Not Edit Here
console.log(100); // 100
console.log(title); // "Title"
console.log(state); // true
