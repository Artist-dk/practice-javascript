// Immutable Objects: Use Object.freeze to create an immutable object. Try to modify its properties and observe the result.

const person = {
  name: "Artist",
  age: 23
};

Object.freeze(person) // do comment to this line and run this program

person.name = "Artist_dk"
person.age = 30

person.city = "Pune"

delete person.age

console.log(person)
console.log(Object.isFrozen(person))
