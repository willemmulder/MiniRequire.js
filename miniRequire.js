var require = (function() {
	var returnFunction = function(names,callback) {
		var returnInstances = [];
		for(var a = 0; a < names.length; a++) {
			returnInstances.push(require.i[names[a]]);
		}
		callback.apply(null, returnInstances);
	};
	returnFunction.i = {};
	return returnFunction;
})();

// instance should be a function
var define = function(name,requires,instance) {
	require(requires, function() {
		require.i[name] = instance.apply(null, Array.prototype.slice.call(arguments,0));
	});
};
define.amd = {jQuery:true};
