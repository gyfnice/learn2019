let array = [1,2,3,4,5]
//数组为空时，调用会报错
let sum = array.reduce((pre, value) => {
	return pre + value;
})