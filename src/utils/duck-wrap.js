function is(obj, type) {
	return Object.prototype.toString.call(obj) === '[object ' + type + ']'
}

function wrapItem(item, fn) {
	return () => {
		let args = [].slice.call(arguments);
		return fn(item.apply(null, args));
	};
}

function wrapObj(obj, fn) {
  let res = {};
  let keys = Object.keys(obj);
	
	for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let item = obj[key];
		
		if (is(item, 'Object')) {
			res[key] = wrapObj(item, fn);
		} else if (is(item, 'Function')) {
			if (key != 'default')
				res[key] = wrapItem(item, fn);
		} else if (is(item, 'String')) {
			//do nothing
		} else {
			throw new TypeError('Object item can only be either function or object');
		}
	}
	
	return res;
}

module.exports = function (obj, fn) {
	if (!is(obj, 'Object'))
		throw new TypeError('Expected obj to be an object');
	
	if (!is(fn, 'Function'))
		throw new TypeError('Expected fn to be a function');
  
  return wrapObj(obj, fn);
};
