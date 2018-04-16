// 能够在私有范围内简单定义所有的函数和变量，并返回一个迷名对象，她拥有指向私有函数指针，该函数他希望展示的共有的方法
var myRevealingModule = function(){
	var privateVar = 'Suhong';
	var publicVar = 'Hey there!';

	function privateFunction() {
		console.log('Name: ' + privateVar);
	}

	function publicSetName(strName) {
		privateName = strName;
	}

	function publicGetName() {
		privateFunction();
	}

	return {
		setName: publicSetName,
		greeting: publicVar,
		getName: publicGetName
	};

}();