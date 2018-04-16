// 抽象工程   abstract（extends）

var AbstractVehicleFactory = (function() {

	var types = {};

	return {
		getVehicle: function(type, customizations) {
			var Vehicle = types[type];
			return (Vehicle) ? return new Vehicle(customizations) : null;
		},

		registerVehicle: function(type, Vehicle) {
			var proto = Vehicle.prototype;

			if ( proto.drive && proto.breakDown ) {
				types[type] = Vehicle;
			}

			return AbstractVehicleFactory;
		},
	};

})();

AbstractVehicleFactory.registerVehicle('car', Car);
AbstractVehicleFactory.registerVehicle('truck', Truck);

var car = AbstractVehicleFactory.getVehicle('car', {
	color: 'lime green',
	state: 'like yellow'
});

// 备注：Car通过工厂模式创建