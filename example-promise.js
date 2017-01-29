
//Old way of using Callbacks

function tempCallback(location,callback) {
	callback(undefined,79);
	callback('city not found');
}

tempCallback('Philadelphia',function(err,temp){
	if(err) {
		console.log('city not found');
	} else {
		console.log('success ',temp)
	}
});

//Using ES6 Promises

function tempPromises(location) {
	return new Promise(function(resolve,reject){
		resolve(79);
		reject('city not found');
	})
}

tempPromises('Philadelphia').then(function(temp){
	console.log('promise success ',temp);
},function(err){
	console.log(err) 
});

//Challenge
function addPromise(a,b){
	return new Promise(function(resolve,reject){
		if(typeof a === 'number' && typeof b === 'number') {
			resolve(a+b);
		} else {
			reject('They are not numbers');
		}
	})
}

addPromise(2,3).then(function(c){
	console.log(c)
},function(err){
	console.log(err);
})

addPromise(2,'some weird string here').then(function(c){
	console.log(c)
},function(err){
	console.log(err);
})
