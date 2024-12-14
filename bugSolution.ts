function greeter(person: string[]): string[] {
  return person.map(name => `Hello, ${name}!`);
}

let user = ["Jane Doe", "John Smith"];
console.log(greeter(user)); // Output: ['Hello, Jane Doe!', 'Hello, John Smith!']

//Alternative solution:
function greeter(person: string): string {
  return `Hello, ${person}!`;
}

let user = ["Jane Doe", "John Smith"];
user.forEach(name => console.log(greeter(name))); //Output: Hello, Jane Doe!, Hello, John Smith!