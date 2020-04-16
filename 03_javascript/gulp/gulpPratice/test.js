require('dist/test.js');
(async () => {
	let a = await (() => new Promise(resolve => {
		resolve('123');
	}))()
	console.log(a);
})()