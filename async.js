async function add(x,y){
	if(typeof x !== 'number' || typeof y !== 'number'){
		throw 'X and Y must be numbers';
	}
	return x+y;
}

//function call and add then and catch as a promise is returned
add('e','r')
.then((val)=>{
	console.log('PROMISE RESOLVED',val);
})
.catch((err)=>{
	console.log('PROMISE REJECTED WITH',err);
});