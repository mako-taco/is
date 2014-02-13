(function () {

	function Is (obj) {
		Object.defineProperties(this, {
			'a': {
				value: function (ctor) {
					return obj instanceof ctor;
				}
			},
			'truthy': {
				get: function () {
					return !!obj;
				}
			},
			'falsey': {
				get: function () {
					return !obj;
				}
			},
			'even': {
				get: function(){
					addIs("even", obj);
					return this;
				}
			},
			'odd': {
				get: function(){
					addIs("odd", obj);
					return this;
				}
			},
			'number': {
				get: function () {
					addIs("number", obj);
					return assert(obj);
				}
			},
			'numeric': {
				get: function () {
					return (parseFloat(obj) == obj) && !isNaN(obj);
				}
			},
			'bool': {
				get: function () {
					return obj === true || obj === false;
				}
			},
			'string': {
				get: function () {
					return obj && obj.constructor === String;
				}
			},
			'null': {
				get: function () {
					return obj === null;
				}
			},
			'undefined': {
				get: function () {
					var undefined;
					return obj === undefined;
				}
			},
			'int': {
				get: function () {
					return ~~obj === obj;
				}
			},
			'array': {
				get: function () {
 					return obj && obj.constructor === Array;
				}
			},
			'object': {
				get: function () {
					return obj !== null && !obj.is.string && !obj.is.number && !obj.is.bool && !obj.is.undefined && !obj.is.null && !obj.is.NaN;
				}
			},
			'function': {
				get: function () {
					return obj && obj.constructor === Function;
				}
			},
			'NaN': {
				get: function () {
					return isNaN(obj);
				}
			}
		});
	};

	Object.defineProperty(Object.prototype, 'is', {
		get: function () {
			return new Is(this)
		}
	});

	/**
	 * Adds lists of tests to be run to __is
	 */

	function addIs(test, obj){
		obj.__is = obj.__is || [];
		obj.__is.push(test);
	}

	/**
	 * Lists of tests to be run via assert()
	 */

	var assertations = {
		"number": function(obj){
			return (obj && obj.constructor === Number) && !obj.is.NaN;
		},
		"even": function(obj){
			return obj%2==0;
		},
		"odd": function(obj){
			return obj%2==1;
		}
	}

	/**
	 * Takes an __is object and runs its tests LIFO
	 * till a false is found or all are done
	 */

	function assert(obj){
		var tests = obj.__is;
		var result = true;
		var i = tests.length;
		while(i-- && result){
			result = assertations[tests[i]](obj);
		}
		return result;
	}
}());