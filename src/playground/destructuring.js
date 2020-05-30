// console.log('destructuring');

// const person = {
//   // name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// }
// const {name: firstName = 'John Doe', age} = person
// // const name = person.name;
// // const age = person.age;
// const {city, temp: temperature} = person.location;
// console.log(`It's ${temperature} in ${city}`)

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}
// my error book.publisher.name
const {name: publisherName = 'Self published'} = book.publisher;

console.log(publisherName);



const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [ , city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName,,midItemPrice] = item;
console.log(`A ${itemName} costs ${midItemPrice}`)
