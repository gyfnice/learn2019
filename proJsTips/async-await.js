//bad Code About promise
/*const random = () => {
	return  Promise.resolve(Math.random())
}*/

const random = () => {
	return new Promise((resolve,  reject) => {
		setTimeout(() => {
			resolve(Math.random())
		}, 1000)
	})
}
const sumRandomAsync = () => {
	let first;
	let second;
	let third;

	return random().then((res) => {
		first = res;
		return random()
	}).then(res => {
		second = res;
		return random()
	}).then(res => {
		third = res;
		return first + third + second
	}).then((result => {
		console.log('this is result is', result)
	}))
}


let random = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Math.random())
		}, 1500)
	})
}

let sumAsyncRandom = () => {
	let first,
		second,
		third
	return random().then(res => {
		first = res;
		return random()
	}).then((res) => {
		second = res;
		return random();
	}).then((res) => {
		third = res;
		return first + second + third
	}).then((result) => {
		console.log('async Total is', result)
	})
}
//Good Code use async/await
const sumAsyncRandom = async() => {
	let first = await random()
	let second = await random()
	let third = await random()
	console.log('total is', first + second + third)
}
