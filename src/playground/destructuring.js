//
// Object Destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 29,
//     location: {
//         city: 'LA',
//         temp: 80
//     }
// };

// const {name: firstName = "Anonymous", age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Publish'} = book.publisher;
// console.log(publisherName)

// 
// Array Destructuring
//

const address = ['1299 s Juniper Street', 'Philadelphia'];

const [, , state = 'New York' ] = address;

console.log(`You are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];

const [coffee, , medium] = item;

console.log(`Medium ${coffee} costs ${medium}`);