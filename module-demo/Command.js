// Command模式，也就是命令模式   参考：interface（implements）	abstract（extends）

(function() {

	var CarManage = {
		
		requestInfo: function(model, id) {
			return 'The information for ' + model + ' with ID ' + id + ' is foobar';
		},

		buyVehicle: function(model, id) {
			return 'You have successfully purchased item ' + id + ' , a ' + model;
		},

		arrageViewing: function(model, id) {
			return 'You successfully booked a viewing of ' + model + ' with ID is ' + id;
		},

		execute: function(event, model, id ) {
			return this[event](model, id)();
		}


	};


	CarManage.execute('buyVehicle', 'Ford', '123123');
	CarManage.execute('requestInfo', 'Ford', '123123');
	CarManage.execute('arrageViewing', 'Ford', '123123');

})();

