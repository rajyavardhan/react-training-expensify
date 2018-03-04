//Object destructuring

// console.log('destructring');

// const Office = {
// 	name: 'LGSI',
// 	headCount: 1600,
// 	projects: {
// 		vc: 'running',
// 		csp: 'closed'
// 	}
// }

// const {name = 'Ananymous', headCount} = Office;
// const {vc: vehicle, csp:common, ms: mobile = 'doubtful'} = Office.projects;

// console.log(`${name} has ${headCount} no of employees`);
// if(vehicle && common) {
// 	console.log(`${name} has two projects with status ${vehicle} and ${common} and ${mobile}`);
// }

// const book = {
// 	title: 'FountainHead',
// 	author: 'Ayn Rand',
// 	publisher: {
// 		name: 'something'
// 	}
// }

// const {name: publisherName = 'SomethingElse'} = book.publisher;
// console.log(publisherName);

//Array destructring

// const address = [1299, 'southstreet', 'philadalphia', 'Pensilivania', 560103];

// const [,, city, state,, planet = 'earth'] = address;

// console.log(`You are from address ${city} ${state} of the planet ${planet}`);


const item = ['coffeee', 'hot', '2','3','4'];

const [type, temp, small, medium,, extraL = 6] = item;

console.log(`    an extra large ${temp} ${type} costs ${extraL}       `)


























