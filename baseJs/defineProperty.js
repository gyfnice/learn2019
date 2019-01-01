let obj = {};
let descriptor = Object.create(null); //没有继承属性
//默认没有 enumerable, 没有configurable, 没有 writable
descriptor.value = 'static'
Object.defineProperty(obj, 'key', descriptor)
// obj = {key: 'static'}

//显式
Object.defineProperty(obj, 'key', {
	enumerable: false,
 	configurable: false,
 	writable: false,
 	value: "static" 
})

let o = {}
let bValue;
Object.defineProperty(o, "b", {
	get: function() {
		return bValue;
	},
	set: function() {
		bValue = newValue;
	},
	enumerable: true,
	configurable: true
})
// 对象o拥有了属性b，值为38
// o.b的值现在总是与bValue相同，除非重新定义o.b

class Shape {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  get area() {
    return this._width * this._height;
  }
}
​
const handler = {
  get: function(target, key) {
    if (key[0] === '_') {
      throw new Error('Attempt to access private property');
    }
    return target[key];
  },
  set: function(target, key, value) {
    if (key[0] === '_') {
      throw new Error('Attempt to access private property');
    }
    target[key] = value;
  }
}
