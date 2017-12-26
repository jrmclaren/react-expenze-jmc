// console.log( 'es6 destruct');

// const person = {
// 	name: 'Jason',
// 	age: 25,
// 	location: {
// 			city: 'Brisbane',
// 			temp: 30
// 	}
// };

// const { name = 'Anoymous', age } = person;

// console.log(`${name} is ${age}`);
// const {city,temp:temperature} = person.location;
// if( city && temperature ){
// 	console.log(`It's ${temperature} in ${city}`);
// }
// const book = {
// 	title: 'Ego is the enemy',
// 	'author': 'Ryan Holiday',
// 	'publisher': {
// 		name: 'Penguin'
// 	}
// };
// const { name:publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array Destructring 
// 
const address = [];
const [, , state= 'new york'] = address;
console.log(`You are in ${state}`);

const item = ['Coffee (Hot)', '$2.00','$2.50','$2.75'];

const [name, ,medium] = item;

console.log(`A medium ${name} costs ${medium}`);
