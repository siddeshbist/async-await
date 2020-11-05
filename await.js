// function getPlanets() {
// 	return axios.get('https://swapi.dev/api/planets/');
// }

// getPlanets().then((res)=> {
// 	console.log(res.data);
// });

//above we see that to make API request we get a promise which we then have to use .then and .catch. However we can use await inside async
//to resolve the promise!!!!Can only use await inside async

async function getPlanets(){
	const res = await axios.get('https://swapi.dev/api/planets');
	console.log(res.data);
}

getPlanets();

//Error handling first option is to attach .catch when making function call

getPlanets().catch((err)=>{
	console.log("There has been an error",err)
})

//next option is to put a try/except clause in the getPlanets function

async function getPlanets(){
	try{
	const res = await axios.get('https://swapi.dev/api/planets');
	console.log(res.data);
	}catch(e){
		console.log("Error",e)
	}
	
}

getPlanets();