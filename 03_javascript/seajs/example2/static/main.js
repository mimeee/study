define(function(require,exports,module){
	window.$ = require('jquery');	
	require("a");
	exports.load = function(name) {
		// if (window.app.jsPaths[name.split('/', 1)[0]] == undefined) {
		// 	name = window.app.basePath + '/bundles/custom/js/controller/' + name;
		// }
    
		// name += '.js?' + window.app.version;
   	
		seajs.use(name, function(module) {
			if ($.isFunction(module.run)) {
				module.run();
			}
		});
	};
	
})