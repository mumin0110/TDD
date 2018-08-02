function Calculator() {}
Calculator.prototype.run = function(oneNum, twoNum, symbol) {
	//	最大值
	var totalNum = 2147483647
	//判断字符串是否为数字  判断正整数/[1−9]+[0−9]∗]
	var re = /^[0-9]+.?[0-9]*/;
	if(!re.test(oneNum) || !re.test(twoNum)) {
		return 'please enter a number'
	}
	if(oneNum > totalNum || twoNum > totalNum) {
		return 'Beyond range'
	}
	if(symbol === '+') {
		return plus(oneNum, twoNum);
	}
	if(symbol === '-') {
		return reduce(oneNum, twoNum);
	}
	if(symbol === '*') {
		return ride(oneNum, twoNum);
	}
	if(symbol === '/') {
		return except(oneNum, twoNum);
	}
	//  加
	function plus(a, b) {
		var plusNum = a + b
		if(plusNum > totalNum) {
			return 'Beyond range'
		}
		return a + b;
	}
	//   减
	function reduce(a, b) {
		var reduceNum = a - b
		if(reduceNum < 0) {
			return 'Beyond range'
		} else {
			return a - b;
		}
	}
	//   乘
	function ride(a, b) {
		var rideNum = a * b
		if(rideNum > totalNum) {
			return 'Beyond range'
		}
		return a * b;
	}
	//   除
	function except(a, b) {
		return a / b;
	}
};