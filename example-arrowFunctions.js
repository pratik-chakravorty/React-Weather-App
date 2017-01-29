
 var names = ['Pratik','Julie','Andrew'];

// names.forEach(function(name){
// 	console.log('forEach: ' + name);
// })

// names.forEach((name)=>{
// 	console.log('arrowFunc: ' + name);
// })


// names.forEach((name)=>console.log( name));


// var returnMe = (name) => name+'!'

// console.log(returnMe('Pratik'));


// var person = {
// 	name: 'Pratik',
// 	greet: function() {
// 		names.forEach((name)=>{
// 			console.log(this.name + ' says hi to ' + name);
// 		})
// 	}
// }

// person.greet();



function add(a,b) {
	return a+b;
}


var add1 = (a,b) => {
	return a+b;
}

var add2 = (a,b) => a+b;


console.log(add(1,4));

console.log(add(9,0));

console.log(add1(2,3));

console.log(add2(4,3));


