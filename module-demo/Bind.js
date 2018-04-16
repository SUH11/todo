// 用apply和原型链实现 bind

Function.prototype.testBind = function(that) {
    var _this = this;
    var args = Array.prototype.slice.apply(arguments, [1]);
    var fNOP = function() {};

    var bound = fucntion() {
        return _this.apply(this instanceof fNOP ? this : that||window, args.concat(Array.prototype.slice.apply(arguments, [0])));
    };

    fNOP.prototype = _this.prototype;

    bound.prototype = new fNOP();

    return bound;
};