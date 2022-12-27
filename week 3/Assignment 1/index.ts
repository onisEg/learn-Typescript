// Edit The Interface To Fix The Problems
interface Member {
    id: number|string;      // add string annotation
    username: string;
    country?: string;       // make it optional
    state: boolean;         // remove readonly
    getName(): string;      // create function return string
    
}

// Do Not Edit The Code Below
let user: Member = { // Property 'country' is missing in type
  id: 100,
  username: "Elzero",
  state: true,
  getName() { // 'getName' does not exist in type 'Member'
    return this.username;
  }
}

user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property